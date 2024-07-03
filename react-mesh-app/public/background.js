// background.js

// Example: Log a message when the extension is installed or updated
chrome.runtime.onInstalled.addListener((details) => {
  console.log('Extension installed or updated', details);
});

// Example: Handle messages from other parts of the extension
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('Message received:', message);
  sendResponse({ response: 'Message received in background script' });
});
