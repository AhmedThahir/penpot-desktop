pipeline {
    agent none

    stages {
        stage('Test') {
            agent { 
                label 'mainserver'
            }
            steps {
                echo 'Hello from the main server'
                sh 'ls'
            }
        }
    }
}