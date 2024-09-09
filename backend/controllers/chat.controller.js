const chatService = require('../services/chat.service');

// @desc    Send a message
// @route   POST /api/chat
exports.sendMessage = async (req, res) => {
  try {
    const message = await chatService.sendMessage(req.body);
    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get chat messages between users
// @route   GET /api/chat/:id
exports.getChatMessages = async (req, res) => {
  try {
    const messages = await chatService.getMessagesByChatId(req.params.id);
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
