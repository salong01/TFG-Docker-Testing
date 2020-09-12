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
                   image 'node:14-alpine'
               }
           }
           steps{
               sh 'node --version'
           }
       }
   }
}