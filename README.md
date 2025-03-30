# Simple Calculator Microservice - Documentation

## Overview
This microservice allows users to perform basic arithmetic operations using a REST API. It supports addition, subtraction, multiplication, and division.

## How to Set Up and Run the Microservice

### 1. Install Node.js
- Download and install from https://nodejs.org/en/download/

### 2. Set Up the Project
- Open terminal and navigate to your project folder
- Run the following commands:
  ```sh
  mkdir sit323-2025-prac4p
  cd sit323-2025-prac4p
  npm init -y
  npm install express
  ```

### 3. Create `.gitignore`
 manually create `.gitignore` file and add `node_modules/`

### 4. Implement the Microservice
- Copy and save the above code in `index.js`

### 5. Run the Microservice Locally
- Start the server:
  ```sh
  node index.js
  ```
- Test in browser/Postman:
  - Addition: `http://localhost:3000/add?num1=10&num2=5`
  - Subtraction: `http://localhost:3000/subtract?num1=10&num2=5`
  - Multiplication: `http://localhost:3000/multiply?num1=10&num2=5`
  - Division: `http://localhost:3000/divide?num1=10&num2=5`

### 6. Push to GitHub
- Initialize Git and push your code:
  ```sh
  git init
  git add .
  git commit -m "Initial commit: Calculator microservice"
  git remote add origin https://github.com/your-username/sit323-2025-prac4p.git
  git branch -M main
  git push -u origin main
  ```
