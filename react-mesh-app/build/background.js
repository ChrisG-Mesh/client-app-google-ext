// background.js

console.log('Background script loaded');

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('Message received in background.js:', message);

  // Handle specific types of messages
  if (message.type === 'testMessage') {
    console.log('Received test message:', message.data);

    // Example response back to the sender
    sendResponse({ received: true });
  }
});

// Example WebSocket connection setup
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000/socket/api');

socket.on('connect', () => {
  console.log('Connected to Socket.IO server');
});

socket.on('event', (message) => {
  console.log('Received event:', message);

  // Forward message to content scripts if needed
  chrome.tabs.query({}, (tabs) => {
    tabs.forEach((tab) => {
      chrome.tabs.sendMessage(tab.id, { type: message.type, data: message.payload });
    });
  });
});

socket.on('disconnect', () => {
  console.log('Disconnected from Socket.IO server');
});

socket.on('connect_error', (error) => {
  console.error('Socket.IO connect error:', error);
});
