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
            environment {
                GITHUB_TOKEN = credentials('e8c4eee6-cef3-4fd5-a65c-1050f7ecb0c7')
                CURRENT_VERSION = "${readJSON(file: './package.json').version}"
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
                            nvm(env.NODE_VERSION) {
                                sh "npm version ${releaseVersion} --no-git-tag-version"
                            }
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
                    options {
                        withAWS(role: 'CI', roleAccount: '508912190628', region: 'eu-west-1')
                    }
                    environment {
                        CODEARTIFACT_AUTH_TOKEN = "${sh(script: 'aws codeartifact get-authorization-token --domain adverity --domain-owner 508912190628 --query authorizationToken --output text', returnStdout: true)}".trim()
                    }
                    steps {
                        checkout(
                            scm: [
                                $class: 'GitSCM',
                                branches: [[name: "refs/tags/${releaseVersion}"]],
                                doGenerateSubmoduleConfigurations: false,
                                extensions: [
                                        [$class: 'CleanCheckout'],
                                        [$class: 'CloneOption', noTags: false, reference: '', shallow: false]
                                ],
                                userRemoteConfigs: [[url: 'git@github.com:pmedianetwork/eslint-config.git']]
                            ]
                        )
                        // sed is needed because there are problems injecting the environment while using  the `nvm` closure
                        sh "sed -i \"s/\\\${CODEARTIFACT_AUTH_TOKEN}/${env.CODEARTIFACT_AUTH_TOKEN}/g\" .npmrc"
                        nvm(nodeVersion) {
                            sh 'npm ci'
                            sh 'npm publish'
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
