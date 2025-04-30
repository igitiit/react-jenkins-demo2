pipeline {
    agent {
        docker {
            image 'node:23-alpine'  // This specifies the Docker image to use
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test -- --watchAll=false'
            }
        }
        stage('Build Production') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                sh 'echo "Deploying to production server"'
                // In a real environment, you would add actual deployment commands here
            }
        }
    }
}