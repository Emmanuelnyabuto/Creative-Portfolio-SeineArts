const { saveMessage } = require('../services/messageService');

const createMessage = async (req, res) => {
    const { content, senderId, receiverId } = req.body;
    try {
        const message = await saveMessage(content, senderId, receiverId);
        res.status(201).json(message);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { createMessage };
