const { createServer } = require('node:http');

const express = require('express');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);
require('dotenv').config()

require('./db')

app.get('/', (req, res) => {
  res.json({ mesage: "Welcome, Chat App!" });
});

const chats = {}
io.on('connection', (socket) => {
  console.log('a user connected');

  // get chatId from socket request query parameters
  const chatId = socket.request._query.chatId;


  // if chatId does not exist in chats object, create an empty array for it
  if (!chats[chatId])
    chats[chatId] = []

  // add socket to chatId in chats object
  chats[chatId].push(socket)

  socket.on('message', message => {
    console.log(message);

    if (!chats[chatId])
      return;

    // emit message to all sockets in the chat room except the sender
    chats[chatId].forEach(s => {
      if (socket === s) return;
      s.emit('message', message)
    })
  })

});



server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});