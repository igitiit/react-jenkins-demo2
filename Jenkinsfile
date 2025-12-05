pipeline {
    agent any
    // chg1
    tools {
        nodejs 'Node25'  // Uses the name for Jenkins configuration shown on pg. 6
    }
    
    environment {
        CI = 'true'
    }

    stages {
        stage('Install') {
            steps {
                dir('C:\\Users\\luke\\react-jenkins-demo-new') {
                    bat 'npm install'
                }
            }
        }

        stage('Test') {
            steps {
                dir('C:\\Users\\luke\\react-jenkins-demo-new') {
                    bat 'npm test -- --watchAll=false'
                }
            }
        }

        stage('Build Production') {
            steps {
                dir('C:\\Users\\luke\\react-jenkins-demo-new') {
                    bat 'npm run build'
                }
            }
        }

        stage('Deploy') {
            steps {
                dir('C:\\Users\\luke\\react-jenkins-demo-new') {
                    bat 'echo Deploying to production server'
                    // Add real deployment commands here
                }
            }
        }
    }
}
