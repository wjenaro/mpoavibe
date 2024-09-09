const subscriptionService = require('../services/subscription.service');

// @desc    Create a subscription
// @route   POST /api/subscription
exports.createSubscription = async (req, res) => {
  try {
    const subscription = await subscriptionService.createSubscription(req.body);
    res.status(201).json(subscription);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get subscription details
// @route   GET /api/subscription/:id
exports.getSubscriptionDetails = async (req, res) => {
  try {
    const subscription = await subscriptionService.getSubscriptionById(req.params.id);
    if (!subscription) {
      return res.status(404).json({ message: 'Subscription not found' });
    }
    res.status(200).json(subscription);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update subscription status
// @route   PUT /api/subscription/:id
exports.updateSubscriptionStatus = async (req, res) => {
  try {
    const updatedSubscription = await subscriptionService.updateSubscriptionById(req.params.id, req.body);
    if (!updatedSubscription) {
      return res.status(404).json({ message: 'Subscription not found' });
    }
    res.status(200).json(updatedSubscription);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
