# LoveConnect

**LoveConnect** is a mobile-first, web-based dating application that allows individuals to connect based on shared interests and geographic location.

## Features

- **Location-Based Matching**: Connect with individuals nearby based on interests.
- **Authentication**: Secure login options including Google and phone verification.
- **Profile Setup**: Easy and intuitive user profile creation.
- **Subscription-Based Chat**: Engage in conversations with matches through a premium chat feature.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: OAuth for Google, phone verification via SMS
- **Deployment**: Heroku / AWS (or specify your preferred platform)

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB database

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/loveconnect.git


Table of Contents
Project Overview
Features
Technologies Used
Installation
Usage
Folder Structure
License
Project Overview
LoveConnect is designed for users to create profiles, browse and like other profiles, and chat upon a successful match. The app includes a seamless sign-up flow using Google authentication or phone number verification, location-based matching, and subscription-based access to messaging features.

Features
1. Authentication
Google Authentication: Users can sign up or sign in using their Google accounts.
Phone Verification: Users can sign up using their phone numbers. A verification code is sent to the phone for verification.
2. Sign-Up Flow
Personal Details: After authentication, users must provide details such as name, gender, date of birth, and profile pictures.
Location-Based Matching: Users can allow automatic location detection or manually enter their location for matching purposes.
3. Profile Management
Users can edit their profile details, interests, and photos.
4. Matching Feed
Browse Profiles: Users are shown profiles based on their preferences and location.
Like/Match: Users can like profiles, and if both users like each other, they are matched.
5. Messaging
Matched users can send messages to each other.
Subscription: Users need to subscribe (weekly or monthly) to access messaging features. Payments can be made via M-Pesa, PayPal, or cryptocurrency.
6. Security Features
Face Recognition: Users' photos are analyzed to detect fraud and avoid criminals from signing up.
Two-Factor Authentication (future implementation): Additional security for account access.
Technologies Used
Frontend
ReactJS: Used for the user interface.
Tailwind CSS: For styling, using custom themes (darker shades of green and purple) and custom fonts.
Google OAuth: For user authentication via Google.
Phone Verification: Uses services like Twilio for sending and verifying SMS codes.
Backend
Node.js: Server-side runtime environment.
Express.js: Web framework for building the API.
MySQL with Sequelize: For managing users and subscription data.
Twilio (or similar): For sending verification codes to phone numbers.
APIs and Integrations
Google Authentication API: To authenticate users via Google.
Twilio SMS API: For phone number verification.
M-Pesa API / PayPal API / Cryptocurrency API: For handling subscription payments.
Installation
Prerequisites
Node.js (v14+)
MySQL
Tailwind CSS
Steps
Clone the repository:

bash
Copy code
git clone https://github.com/username/loveconnect.git
cd loveconnect
Install dependencies:

bash
Copy code
npm install
Set up environment variables: Create a .env file and add the necessary variables:

bash
Copy code
PORT=4000
DB_HOST=localhost
DB_PORT=3307
DB_USER=root
DB_PASSWORD=
DB_NAME=lovedb
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
Set up MySQL database:

bash
Copy code
CREATE DATABASE lovedb;
Run migrations:

bash
Copy code
npx sequelize-cli db:migrate
Start the development server:

bash
Copy code
npm start
The server will run at http://localhost:4000 by default.

Usage
Homepage:

Users are greeted with options to either sign in or sign up using Google or phone verification.
Sign-Up Flow:

Users can either sign up using Google or enter their phone number for verification.
After verifying their phone number, users are prompted to enter additional details to complete the sign-up process.
Profile Setup:

After signing up, users must provide their name, birthday, gender, and profile images.
Location detection is done automatically or manually entered by the user.
Matching Feed:

Once logged in, users can browse profiles, like them, and initiate matches.
Chat and Subscription:

Upon a successful match, users are directed to subscribe for chat features using M-Pesa, PayPal, or cryptocurrency.
Folder Structure
bash
Copy code
loveconnect/
│
├── public/                  # Static assets
│   └── images/              # Backgrounds and logos
│
├── src/
│   ├── components/          # Reusable React components
│   ├── pages/               # Main pages (HomeScreen, SignUp, etc.)
│   ├── App.js               # Main app component
│   ├── index.js             # Entry point
│
├── server/                  # Backend API (Express.js)
│   ├── controllers/         # Request handlers
│   ├── models/              # Database models (Sequelize)
│   ├── routes/              # API routes
│   └── server.js            # Server configuration
│
├── tailwind.config.js       # Tailwind configuration
├── package.json             # NPM dependencies
└── .env                     # Environment variables
License
This project is licensed under the MIT License.

This README.md provides a detailed overview of the project's purpose, features, setup instructions, and usage details. Let me know if you would like any specific adjustments or additional information!
