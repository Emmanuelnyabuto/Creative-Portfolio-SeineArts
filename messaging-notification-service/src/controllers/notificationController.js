const { saveNotification } = require('../services/notificationService');

const createNotification = async (req, res) => {
    const { content, userId } = req.body;
    try {
        const notification = await saveNotification(content, userId);
        res.status(201).json(notification);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { createNotification };
