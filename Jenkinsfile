pipeline {
    agent any

    stages {
        stage('Install') {
            steps {
                // Run npm install inside your new project folder
                dir('C:\\Users\\luke\\react-jenkins-demo-new') {
                    bat 'npm install'
                }
            }
        }

        stage('Test') {
            steps {
                // Run tests inside your new project folder
                dir('C:\\Users\\luke\\react-jenkins-demo-new') {
                    bat 'npm test -- --watchAll=false'
                }
            }
        }
    }
}
