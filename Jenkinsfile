pipeline {
    agent none

    stages {
        stage('Test') {
            agent { 
                label 'mainserver'
            }
            steps {
                echo 'Hello from the main server'
                sh 'ls /'
                sh 'yarn --help'
                sh 'npm --help'
            }
        }
        stage('Make sure Yarn works') {
            agent any
            steps {
                echo 'Hello from the Mac server'
                sh 'ls /'
                sh 'yarn --help'
                sh 'npm --help'
            }
        }
    }
}