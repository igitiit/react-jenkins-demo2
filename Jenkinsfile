pipeline {
    agent any

    tools {
        nodejs 'Node25'   // Make sure this matches your Jenkins NodeJS tool name
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
