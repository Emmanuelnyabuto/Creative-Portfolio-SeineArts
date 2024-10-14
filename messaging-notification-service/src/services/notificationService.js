const notifications = []; // In-memory storage for notifications (for demo purposes)

const createNotification = (userId, message) => {
    return new Promise((resolve, reject) => {
        try {
            const newNotification = {
                id: notifications.length + 1,
                userId,
                message,
                timestamp: new Date(),
                read: false
            };
            notifications.push(newNotification);
            resolve(newNotification);
        } catch (err) {
            reject(err);
        }
    });
};

const getUserNotifications = (userId) => {
    return new Promise((resolve, reject) => {
        try {
            const userNotifications = notifications.filter(notification => notification.userId === userId);
            resolve(userNotifications);
        } catch (err) {
            reject(err);
        }
    });
};

module.exports = { createNotification, getUserNotifications };
