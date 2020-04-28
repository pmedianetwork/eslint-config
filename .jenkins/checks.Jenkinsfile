pipeline {
    libraries { lib 'adverity-shared-library@0.4.1'}
    agent { label "PRJob" }
    environment {
        NODE_VERSION = getNodeVersion()
    }
    stages {
        stage('Preparation') {
            steps {
                echo "Using node version: ${env.NODE_VERSION}"
            }
        }
        stage('Install dependencies') {
            steps {
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
    post {
        unsuccessful {
            script {
                if (env.DAILY) {
                    notifySlack channel: 'dev-presense'
                }
            }
        }
    }
}

