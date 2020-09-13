pipeline {
    def app
    stages {
        stage('Setup') {
            steps {
                sh 'cd docker-testing'
                app = docker.build("saulalonso2/docker-testing")
            }
        }
        stage('Build') {
            agent {
                docker {
                    image 'node:14-alpine'
                }
            }
            steps{
                sh 'node --version'
                app = docker.build("saulalonso2/docker-testing")
            }
        }
    }
}