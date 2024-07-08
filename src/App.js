import React, { useEffect, useState } from 'react';
import './App.css';
import OpenLinkWebSDK from './components/OpenLinkWebSDK';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Listener for messages from background.js
    const handleMessage = (message) => {
      if (message.type === 'socketMessage') {
        setMessages((prevMessages) => [...prevMessages, message.data]);
      }
    };

    chrome.runtime.onMessage.addListener(handleMessage);

    return () => {
      chrome.runtime.onMessage.removeListener(handleMessage);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Google Extension x Mesh</h1>
        <div className="OpenLink">
          <OpenLinkWebSDK />
        </div>
      </header>
      <div className="Message-section">
        <h3>Messages from Background Script</h3>
        <div className="Message-list">
          {messages.map((msg, index) => (
            <div key={index} className="Message-item">{msg}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
