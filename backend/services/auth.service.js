
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model'); 

// Sign up Service
exports.signUp = async (userData) => {
  const { name, gender, dob, email, password, phoneNumber } = userData;

  // Check if user already exists
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    throw new Error('User with this email already exists');
  }

  // Create new user
  const newUser = await User.create({
    name,
    email,
    gender,  // Password will be hashed by the model's pre-save hook
    password,
    phoneNumber,
    dob
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
