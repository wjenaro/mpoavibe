const authService = require('../services/auth.service');



// @desc    Register a new user
// @route   POST /api/auth/sign-up
exports.phoneSignUp = async (req, res) => {

  const { phoneNumber } = req.body;

    // Send verification code via Twilio or SMS provider
    const verificationCode = Math.floor(100000 + Math.random() * 900000);
    
    // Store verification code temporarily, send it via SMS
    await sendSMS(phoneNumber, `Your verification code is ${verificationCode}`);

    res.json({ message: 'Code sent to phone number' });

};

const sendSMS = async (phoneNumber, message) => {
  // Use Twilio or another SMS provider here
  console.log(`Sending SMS to ${phoneNumber}: ${message}`);
};

///
exports.phoneVerify= async (req, res) => {
  const { phoneNumber, code, email } = req.body;

  // Verify code (should be stored temporarily on backend)
  if (isValidCode(phoneNumber, code)) {
      // Prompt user for name, gender, and dob
      res.json({ message: 'Code verified, please provide name, gender, and DOB' });
  } else {
      res.status(400).json({ error: 'Invalid code' });
  }
};


const isValidCode = (phoneNumber, code) => {
  // Implement code validation logic, e.g., check a database or in-memory store
  return true; // For demonstration, assume valid
};


exports.signUpDetails= async (req, res) => {
  const { name, gender, dob, password, email, phoneNumber } = req.body;

  // Store user info in DB
  await authService.signUp({ name, gender, dob, password, email, phoneNumber });

  res.json({ message: 'Signup successful' });
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
