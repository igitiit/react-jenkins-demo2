pipeline {

    agent any

    

    tools {

        nodejs 'Node25'  // Uses the name for Jenkins configuration batown on pg. 6

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

        stage('Test') {

            steps {

                bat 'npm test -- --watchAll=false'

            }

        }

        stage('Build Production') {

            steps {

                bat 'npm run build'

            }

        }

        stage('Deploy') {

            steps {

                bat 'echo "Deploying to production server"'

                // In a real environment, you would add actual deployment commands here

            }

        }

    }

}

