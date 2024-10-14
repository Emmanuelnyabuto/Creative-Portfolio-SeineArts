const messages = []; // A simple in-memory storage for demonstration purposes

const saveMessage = (content, senderId, receiverId) => {
    return new Promise((resolve, reject) => {
        try {
            const newMessage = {
                id: messages.length + 1,
                content,
                senderId,
                receiverId,
                timestamp: new Date()
            };
            messages.push(newMessage);
            resolve(newMessage);
        } catch (err) {
            reject(err);
        }
    });
};

module.exports = { saveMessage };
