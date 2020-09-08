pipeline {
   agent any

   stages {
       stage('Setup') {
           steps {
               stash includes: '**/*', name: 'workspace'
           }

       }
       stage('Build') {
           agent {
               docker {
                   image 'node:8.9.4-alpine'
               }
           }
           steps{
               unstash name: 'workspace'
               sh "npm install"
               sh "npm run build:universal"
               sh "tar czf eyd-client.tgz *"
           }

           post {
               always {
                   archiveArtifacts artifacts: 'eyd-client.tgz', fingerprint: true
               }
           }
       }
   }
}