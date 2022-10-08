pipeline {
    agent none

    stages {
        stage('Run on Windows') {
            agent { label 'winvm'}
            steps {
                echo "I'm running on the Windows VM..."
            }
        }
        stage('Run on Server') {
            agent any
            steps {
                echo "I'm running on the server..."
            }
        }
    }
}