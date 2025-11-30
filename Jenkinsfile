pipeline {
    agent any
    
    tools {
        nodejs 'Node23'  // Use the name Jenkins suggests is configured
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
        stage('Debug Tests') {
            steps {
               bat 'dir src'
               bat 'git ls-files src'
               bat 'npm test -- --listTests'
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