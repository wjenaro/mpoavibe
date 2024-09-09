const profileService = require('../services/profile.service');

// @desc    Create or update user profile
// @route   POST /api/profile
exports.createOrUpdateProfile = async (req, res) => {
  try {
    const profile = await profileService.createOrUpdateProfile(req.body);
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get profile details
// @route   GET /api/profile/:id
exports.getProfileDetails = async (req, res) => {
  try {
    const profile = await profileService.getProfileById(req.params.id);
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
