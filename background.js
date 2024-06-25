function makeAPICall(sendResponse) {
    fetch(`${process.env.NEXT_LOCAL_URL}/api/makeAPIcall`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response error in background.js');
        }
        return response.json();
      })
      .then(data => {
        console.log('API Response:', data);
        sendResponse({ data: data });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        sendResponse({ error: error.message });
      });
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'makeAPICall') {
    makeAPICall(sendResponse);
    return true;
  }
});
