import { io } from 'socket.io-client';

// Hosting server on localhost 3000, adjust as needed
const socket = io('http://localhost:3000', {
  transports: ['websocket'],
});

socket.on('connect', () => {
  console.log('Connected to Socket.IO server');
});

socket.on('event', (data) => {
  console.log('Socket.IO event received:', data);
});

socket.on('message', (message) => {
  console.log('Message received from server:', message);
  // Send the received message to App.js
  chrome.runtime.sendMessage({ type: 'socketMessage', data: message });
});
socket.on('disconnect', () => {
  console.log('Socket.IO connection closed');
});
