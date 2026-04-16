pipeline {
  agent {
    docker {
      image 'node:lts-alpine'
    }
  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
    stage('Deliver') {
      steps {
        sh 'npm run build'
        echo "App ready to deploy"
      }
    }
  }
}