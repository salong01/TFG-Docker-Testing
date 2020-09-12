pipeline {
   agent any

   stages {
       stage('Setup') {
           steps {
               stash includes: '**/*', name: 'workspace'
           }
       }
       stage('echo') {
           sh 'echo test'
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