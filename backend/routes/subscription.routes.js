const express = require('express');
const router = express.Router();

// Import the controller functions
const subscriptionController = require('../controllers/subscription.controller');

// @route   POST /api/subscription
// @desc    Create a subscription
// @access  Private
router.post('/', subscriptionController.createSubscription);

// @route   GET /api/subscription/:id
// @desc    Get subscription details
// @access  Private
router.get('/:id', subscriptionController.getSubscriptionDetails);

// @route   PUT /api/subscription/:id
// @desc    Update subscription status
// @access  Private
router.put('/:id', subscriptionController.updateSubscriptionStatus);

module.exports = router;
