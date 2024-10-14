# CodeTest
Junior Frontend Developer Test: React JS - SolidiThai Co., Ltd.

CodeTest - Junior Frontend Developer Test
Project Overview
This repository contains the test project for the Junior Frontend Developer position at SolidiThai Co., Ltd. The project is built using React JS. It serves as a demonstration of your ability to create a simple React application, handle routing, manage state, and implement best practices in frontend development.

To set up and run this project, ensure that you have the following tools installed on your machine:

Node.js (v14.x or higher)
npm (v6.x or higher) or yarn (v1.x or higher)
Git
Project Setup
1. Clone the Repository 
First, clone the repository to your local machine:

bash
git clone 
cd codetest-frontend
2. Install Dependencies
Once inside the project folder, install the necessary dependencies:

Using npm:

bash
คัดลอกโค้ด
npm install


Running the Project
1. Start the Development Server
To start the application in development mode, run the following command:

Using npm:
npm run dev

This will start a development server and the app will be available at http://localhost:5173

.
├── public/                # Static files like index.html, favicon, etc.
├── src/
│   ├── assets/            # Images, fonts, icons, etc.
│   ├── components/        # Reusable components
│   ├── pages/             # Pages for routing
│   ├── utils/             # Utility functions
│   ├── styles/            # Global styles and SCSS files
│   ├── App.js             # Main app component
│   ├── index.js           # React DOM entry point
│   └── routes.js          # Application routing
├── .env                   # Environment variables (if applicable)
├── package.json           # Project metadata and scripts
└── README.md              # This file
Testing
Unit tests are a key part of ensuring code quality. This project uses Jest for testing.
