pipeline {
    libraries { lib 'adverity-shared-library@1.0.2' }
    agent { label "PRJob" }
    stages {
        stage('Validate changesets') {
            steps {
                validateChangesets()
                echo generateReleaseNote()
            }
        }
    }
}
