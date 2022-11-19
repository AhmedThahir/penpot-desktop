pipeline {
    agent none

    stages {
        stage('Build') {
            agent {
                label 'optiplex'
            }
            steps {
                sh "npm i"
                sh "npm run build"
                sh "sudo cp dist/*.AppImage /usr/share/updates/penpot-desktop/"
                sh "sudo cp dist/latest-linux.yml /usr/share/updates/penpot-desktop/"
            }
        }
    }
}