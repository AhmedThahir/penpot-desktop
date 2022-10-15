pipeline {
    agent none

    stages {
        stage('Build') {
            agent any
            steps {
                sh "npm i"
                sh "npm run build"
            }
        }
    }
}