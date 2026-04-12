pipeline {
    agent any
    
    tools {
        nodejs 'Node25'  // Uses the name for Jenkins configuration shown on pg. 6
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
