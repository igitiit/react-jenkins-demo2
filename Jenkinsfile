pipeline {
    agent any
    
    tools {
        nodejs 'Node25'
    }
    
    environment {
        CI = 'true'
    }
    
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }
        stage('Debug Tests') {
            steps {
                // Show files in src
                bat 'dir src'
                // Show what Git thinks is tracked
                bat 'git ls-files src'
                // Print contents of App.test.js
                bat 'type src\\App.test.js'
                // Show what Jest thinks are test files
                bat 'npm test -- --listTests'
            }
        }
        stage('Test') {
            steps {
                // Force Jest to run App.test.js directly
                bat 'npm test -- src/App.test.js --watchAll=false'
            }
        }
        stage('Build Production') {
            steps {
                bat 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                bat 'echo Deploying to production server'
            }
        }
    }
}
