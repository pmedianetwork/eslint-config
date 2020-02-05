def releaseNoteBody
def releaseVersion
def releaseUrl

pipeline {
    libraries { lib 'adverity-shared-library@1.0.2' }
    agent { label "PRJob" }
    environment {
        NODE_VERSION = getNodeVersion()
    }
    parameters {
        validatingString(
            name: "CONFIRMATION",
            regex: /^yes$/,
            failedValidationMessage: "Please type 'yes' to confirm.",
            description: "Are you sure you want to make a release?"
        )
    }
    stages {
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
                            releaseNoteBody = generateReleaseNote()
                        }
                    }
                }
                stage('Release') {
                    steps {
                        gitFlowRelease(version: releaseVersion) {
                            sh "npm version ${releaseVersion} --no-git-tag-version"
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
        }
        unsuccessful {
            notifySlack channel: 'dev-frontend'
        }
        cleanup {
            cleanWs()
        }
    }
}
