// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const { User } = require('../models/user.model');



// // Sign up Service
// exports.signUp = async (userData) => {
//   const { fullName, email, password, interests, profilePicture, additionalInfo } = userData;

//   // Check if user already exists
//   const existingUser = await User.findOne({ email });
//   if (existingUser) {
//     throw new Error('User with this email already exists');
//   }

//   // Create new user
//   const newUser = new User({
//     fullName,
//     email,
//     password,  // Password will be hashed by the model's pre-save hook
//     interests,
//     profilePicture,
//     additionalInfo
//   });

//   await newUser.save();
//   return newUser;
// };

// // Sign in Service
// exports.signIn = async (email, password) => {
//   const user = await User.findOne({ email });
//   if (!user) {
//     throw new Error('User not found');
//   }

//   const isMatch = await user.comparePassword(password);
//   if (!isMatch) {
//     throw new Error('Invalid credentials');
//   }

//   return user;
// };

// // Forgot Password Service (for simplicity, returning dummy message)
// exports.forgotPassword = async (email) => {
//   const user = await User.findOne({ email });
//   if (!user) {
//     throw new Error('User not found');
//   }

//   // Here you can integrate sending an email with a password reset link or OTP.
//   return { message: 'Password reset instructions sent to your email.' };
// };

// exports.signIn = async (loginData) => {
//   const user = await User.findOne({ where: { email: loginData.email } });
//   if (!user || !(await bcrypt.compare(loginData.password, user.password))) {
//     throw new Error('Invalid credentials');
//   }
//   const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
//   return token;
// };



const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model'); // Fixed import

// Sign up Service
exports.signUp = async (userData) => {
  const { fullName, email, password, interests, profilePicture, additionalInfo } = userData;

  // Check if user already exists
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    throw new Error('User with this email already exists');
  }

  // Create new user
  const newUser = await User.create({
    fullName,
    email,
    password,  // Password will be hashed by the model's pre-save hook
    interests,
    profilePicture,
    additionalInfo
  });

  return newUser;
};

// Sign in Service
exports.signIn = async (loginData) => {
  const user = await User.findOne({ where: { email: loginData.email } });
  if (!user || !(await user.comparePassword(loginData.password))) {
    throw new Error('Invalid credentials');
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'your_jwt_secret', { expiresIn: '1h' });
  return token;
};

// Forgot Password Service (for simplicity, returning dummy message)
exports.forgotPassword = async (email) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new Error('User not found');
  }

  // Here you can integrate sending an email with a password reset link or OTP.
  return { message: 'Password reset instructions sent to your email.' };
};
