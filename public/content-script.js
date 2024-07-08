// content.js

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('Received message in content script:', message);
  
  // Update DOM with received event
  const eventContainer = document.getElementById('events');
  if (eventContainer) {
    const newEvent = document.createElement('div');
    newEvent.textContent = `Event: ${message.type}, Data: ${JSON.stringify(message.data)}`;
    eventContainer.appendChild(newEvent);
  }
});
