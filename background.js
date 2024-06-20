// background.js

// Function to make API call
function makeAPICall() {
  const apiUrl = 'testurl';

  return fetch(apiUrl, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      }
  })
  .then(response => response.json())
  .catch(error => {
      console.error('Error fetching data:', error);
      throw error;
  });
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'makeAPICall') {
      makeAPICall()
          .then(data => {
              sendResponse({ success: true, data: data });
          })
          .catch(error => {
              sendResponse({ success: false, error: error });
          });
      return true;
});
