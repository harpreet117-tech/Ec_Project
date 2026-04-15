pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'node -v'
                sh 'npm -v'
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test -- --watchAll=false'
            }
        }

        stage('Build App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t my-react-app .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh 'docker rm -f my-react-app-container || true'
                sh 'docker run -d -p 3000:80 --name my-react-app-container my-react-app'
            }
        }
    }
}