pipeline {
    libraries { lib 'adverity-shared-library@2.1.0' }
    agent { label "PRJob" }
    environment {
        NODE_VERSION = getNodeVersion()
        GITHUB_TOKEN = credentials('e8c4eee6-cef3-4fd5-a65c-1050f7ecb0c7')
    }
    stages {
        stage('Validate changesets') {
            steps {
                validateChangesets()
                echo generateReleaseNote(collapseNonTyped: true)
            }
        }
    }
}
