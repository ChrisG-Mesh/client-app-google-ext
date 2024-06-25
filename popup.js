// popup.js

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('callApiButton').addEventListener('click', () => {
    console.log("Button clicked, sending message to background script");
    chrome.runtime.sendMessage({ action: 'makeAPICall' }, response => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
        document.getElementById('apiResult').innerText = 'Error: ' + chrome.runtime.lastError.message;
        return;
      }

      if (!response) {
        document.getElementById('apiResult').innerText = 'Error: No response from background script';
        return;
      }

      if (response.error) {
        document.getElementById('apiResult').innerText = 'Error: ' + response.error;
      } else {
        document.getElementById('apiResult').innerText = JSON.stringify(response.data, null, 2);
      }
    });
  });
});
