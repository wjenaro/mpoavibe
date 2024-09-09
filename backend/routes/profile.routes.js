const express = require('express');
const router = express.Router();

// Import the controller functions
const profileController = require('../controllers/profile.controller');

// @route   POST /api/profile
// @desc    Create or update user profile
// @access  Private
router.post('/', profileController.createOrUpdateProfile);

// @route   GET /api/profile/:id
// @desc    Get profile details
// @access  Private
router.get('/:id', profileController.getProfileDetails);

module.exports = router;
