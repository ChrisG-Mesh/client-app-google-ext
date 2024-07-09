import { io } from 'socket.io-client';
import config from '/src/config';

const baseUrl = config.BASE_URL; //define your URL in a config.js file in the src directory

const socket = io(`${baseUrl}`, {
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
