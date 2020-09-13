pipeline {
    agent {
        docker {
            image 'node:14-alpine'
        }
    }
    stages {
        stage('Setup') {
            steps {
                sh 'echo "setup step"'
                sh 'node --version'
            }
        }
        stage('Build') {
            steps{
                sh 'echo "build stage"'
            }
        }
    }
}