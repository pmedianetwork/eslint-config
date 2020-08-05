pipeline {
    libraries { lib 'adverity-shared-library@2.10.0'}
    agent { label "PRJob" }
    environment {
        NODE_VERSION = getNodeVersion()
    }
    options {
        withAWS(role: 'CI', roleAccount: '221160807535')
    }
    stages {
        stage('Preparation') {
            steps {
                echo "Using node version: ${env.NODE_VERSION}"
            }
        }
        stage('Install dependencies') {
            options {
                withAWS(role: 'CI', roleAccount: '508912190628', region: 'eu-west-1')
            }
            environment {
                CODEARTIFACT_AUTH_TOKEN = "${sh(script: 'aws codeartifact get-authorization-token --domain adverity --domain-owner 508912190628 --query authorizationToken --output text', returnStdout: true)}".trim()
            }
            steps {
                // sed is needed because there are problems inejcting the environment while using  the `nvm` closure
                sh "sed -i \"s/\\\${CODEARTIFACT_AUTH_TOKEN}/${env.CODEARTIFACT_AUTH_TOKEN}/g\" .npmrc"
                nvm(env.NODE_VERSION) {
                    sh 'npm ci'
                }
            }
        }
        stage('Run tests and linters') {
            failFast true
            options {
                timeout(time: 10, unit: 'MINUTES')
            }
            parallel {
                stage('Test') {
                    environment {
                        CI = true
                    }
                    steps {
                        nvm(env.NODE_VERSION) {
                            sh 'npm run test'
                        }
                    }
                }
                stage('Lint') {
                    steps {
                        nvm(env.NODE_VERSION) {
                            sh 'npm run lint'
                        }
                    }
                }
            }
        }
    }
}

