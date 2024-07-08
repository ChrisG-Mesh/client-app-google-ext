import React, { useEffect, useState } from 'react';
import './App.css';
import OpenLinkWebSDK from './components/OpenLinkWebSDK';
import DirectBrokerWebSDK from './components/DirectBrokerWebSDK';

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
        <h1>Google Ext x Mesh</h1>
        <div className="OpenLink">
          <OpenLinkWebSDK />
        </div>
        <div className="OpenLink">
          <DirectBrokerWebSDK />
        </div>
      </header>
      <div className="Message-section">
        <div className="Section-title">
          <h3>Events from Server:</h3>
        </div>
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
