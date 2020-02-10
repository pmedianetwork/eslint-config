pipeline {
    libraries { lib 'adverity-shared-library@1.1.0' }
    agent { label "PRJob" }
    stages {
        stage('Validate changesets') {
            steps {
                validateChangesets isNewChangesetRequired: false
                echo generateReleaseNote()
            }
        }
    }
}
