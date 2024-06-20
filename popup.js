// popup.js

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('callApiButton').addEventListener('click', function() {
      chrome.runtime.sendMessage({ action: 'makeAPICall' }, function(response) {
          if (response.success) {
              console.log("success from background.js")
              document.getElementById('apiResult').innerText = JSON.stringify(response.data, null, 2);
          } else {
              console.error('Error:', response.error);
              document.getElementById('apiResult').innerText = 'Error: ' + response.error;
          }
      });
  });
});
