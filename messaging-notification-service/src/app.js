const express = require('express');
const dotenv = require('dotenv');
const http = require('http');
const { Server } = require('socket.io');
const messageRoutes = require('./routes/messageRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const { messageSocket } = require('./websockets/messageSocket');

dotenv.config();
const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/messages', messageRoutes);
app.use('/notifications', notificationRoutes);

// Socket.io for real-time messaging
io.on('connection', (socket) => {
    console.log('A user connected');
    messageSocket(io, socket);

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

// Start the server
server.listen(PORT, () => {
    console.log(`Messaging & Notification Service running on port ${PORT}`);
});
