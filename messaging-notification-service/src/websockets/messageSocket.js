const messageSocket = (io, socket) => {
    socket.on('sendMessage', (message) => {
        io.emit('receiveMessage', message);  // Broadcast message to all clients
    });
};

module.exports = { messageSocket };
