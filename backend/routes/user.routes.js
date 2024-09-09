const express = require('express');
const router = express.Router();

// Import the controller functions
const userController = require('../controllers/user.controller');

// @route   GET /api/user/:id
// @desc    Get user details
// @access  Private
router.get('/:id', userController.getUserDetails);

// @route   PUT /api/user/:id
// @desc    Update user profile
// @access  Private
router.put('/:id', userController.updateUserProfile);

// @route   DELETE /api/user/:id
// @desc    Delete user account
// @access  Private
router.delete('/:id', userController.deleteUserAccount);

module.exports = router;
