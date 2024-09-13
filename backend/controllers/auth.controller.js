const authService = require('../services/auth.service');



// @desc    Register a new user
// @route   POST /api/auth/sign-up
exports.signUp = async (req, res) => {
  try {
    const user = await authService.signUp(req.body);
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// @desc    Authenticate user and return JWT
// @route   POST /api/auth/sign-in
exports.signIn = async (req, res) => {
  try {
    const user = await authService.signIn(req.body.email, req.body.password);
    res.status(200).json({ message: 'User authenticated successfully', user });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

// @desc    Handle password recovery
// @route   POST /api/auth/forgot-password
exports.forgotPassword = async (req, res) => {
  try {
    const response = await authService.forgotPassword(req.body.email);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// @desc    Authenticate user and return JWT
// @route   POST /api/auth/sign-in
exports.signIn = async (req, res) => {
  try {
    const token = await authService.signIn(req.body);
    res.status(200).json({ token });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

// @desc    Handle password recovery
// @route   POST /api/auth/forgot-password
exports.forgotPassword = async (req, res) => {
  try {
    await authService.forgotPassword(req.body);
    res.status(200).json({ message: 'Password recovery instructions sent' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
