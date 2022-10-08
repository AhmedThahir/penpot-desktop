pipeline {
    agent none

    stages {
        stage('Run on Windows') {
            steps {
                agent { label 'winvm'}
                echo "I'm running on the Windows VM..."
            }
        }
        stage('Run on Server') {
            steps {
                agent any
                echo "I'm running on the server..."
            }
        }
    }
}