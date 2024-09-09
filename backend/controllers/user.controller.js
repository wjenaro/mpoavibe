const userService = require('../services/user.service');

// @desc    Get user details
// @route   GET /api/user/:id
exports.getUserDetails = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userService.getUserById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update user profile
// @route   PUT /api/user/:id
exports.updateUserProfile = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUser = await userService.updateUserById(userId, req.body);
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete user account
// @route   DELETE /api/user/:id
exports.deleteUserAccount = async (req, res) => {
  try {
    const userId = req.params.id;
    const result = await userService.deleteUserById(userId);
    if (!result) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(204).send(); // No content to return
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
