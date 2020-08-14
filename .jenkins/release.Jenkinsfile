def releaseNoteBody
def releaseVersion
def releaseUrl

pipeline {
    libraries { lib 'adverity-shared-library@2.10.0' }
    agent { label "PRJob" }
    options {
        withAWS(role: 'CI', roleAccount: '221160807535')
    }
    environment {
        NODE_VERSION = getNodeVersion()
    }
    stages {
        stage('Preconditions') {
            when { expression { !isReleasable() } }
            steps {
                script { currentBuild.result = 'ABORTED' }
                error('Aborting, because the branch is not releasable.')
            }
        }
        stage('Publish') {
            options {
                withAWS(role: 'CI', roleAccount: '508912190628', region: 'eu-west-1')
            }
            environment {
                GITHUB_TOKEN = credentials('e8c4eee6-cef3-4fd5-a65c-1050f7ecb0c7')
                CURRENT_VERSION = "${readJSON(file: './package.json').version}"
                ADVERITY_CODEARTIFACT_AUTH_TOKEN = "${sh(script: 'aws codeartifact get-authorization-token --domain adverity --domain-owner 508912190628 --query authorizationToken --output text', returnStdout: true)}".trim()
            }
            stages {
                stage('Changesets') {
                    steps {
                        script {
                            releaseVersion = computeNextSemanticVersion(currentVersion: env.CURRENT_VERSION)
                            releaseNoteBody = generateReleaseNote(collapseNonTyped: true)
                        }
                    }
                }
                stage('Release') {
                    steps {
                        gitFlowRelease(version: releaseVersion) {
                            sh "sed -i \"s/\\\${ADVERITY_CODEARTIFACT_AUTH_TOKEN}/${env.ADVERITY_CODEARTIFACT_AUTH_TOKEN}/g\" .npmrc"
                            nvm(env.NODE_VERSION) {
                                sh "npm version ${releaseVersion} --no-git-tag-version"
                            }
                            sh 'git checkout HEAD -- .npmrc'
                            cleanChangesets()
                        }
                        script {
                            releaseUrl = publishRelease(
                                repository: 'pmedianetwork/eslint-config',
                                tag: releaseVersion,
                                body: releaseNoteBody
                            )
                        }
                    }
                }
                stage('Deploy') {
                    agent { label "master" }
                    steps {
                        sh 'git fetch --tags'
                        sh "git checkout refs/tags/${releaseVersion}"
                        sh 'git reset --hard'
                        sh 'git clean -fdx'
                        // sed is needed because there are problems injecting the environment while using  the `nvm` closure
                        sh "sed -i \"s/\\\${ADVERITY_CODEARTIFACT_AUTH_TOKEN}/${env.ADVERITY_CODEARTIFACT_AUTH_TOKEN}/g\" .npmrc"
                        script {
                            def nodeVersion = getNodeVersion()
                            nvm(nodeVersion) {
                                sh 'npm ci'
                                sh 'npm publish'
                            }
                        }
                    }
                }
            }
        }
    }
    post {
        success {
            slackSend(
                color: 'good',
                message: "Version ${releaseVersion} of eslint-config was released! :tada: (${releaseUrl})",
                channel: 'dev-frontend'
            )
            cleanWs()

        }
        failure {
            notifySlack channel: 'dev-frontend'
        }
    }
}
