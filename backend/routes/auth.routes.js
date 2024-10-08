const express = require('express');
const router = express.Router();

// Import the controller functions
const authController = require('../controllers/auth.controller');

// @route   POST /api/auth/sign-up
// @desc    Register a new user
// @access  Public
router.post('/phone/sign-up', authController.phoneSignUp);
//
router.post('/auth/phone/verify', authController.phoneVerify);

router.post('/auth/details', authController.signUpDetails);

// @route   POST /api/auth/sign-in
// @desc    Authenticate user and return JWT
// @access  Public
router.post('/sign-in', authController.signIn);

// @route   POST /api/auth/forgot-password
// @desc    Handle password recovery
// @access  Public
router.post('/forgot-password', authController.forgotPassword);

module.exports = router;
