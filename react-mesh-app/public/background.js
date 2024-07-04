// background.js

<<<<<<< HEAD
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
=======
// Example: Log a message when the extension is installed or updated
chrome.runtime.onInstalled.addListener((details) => {
  console.log('Extension installed or updated', details);
});

// Example: Handle messages from other parts of the extension
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('Message received:', message);
  sendResponse({ response: 'Message received in background script' });
>>>>>>> 650d90848af78ed3b6177e1fcbeb6c25bb546de2
});
