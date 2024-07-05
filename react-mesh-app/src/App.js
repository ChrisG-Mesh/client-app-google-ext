import React, { useEffect, useState } from 'react';
import './App.css';
import OpenLinkWebSDK from './components/OpenLinkWebSDK';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Listener for messages from background.js
    chrome.runtime.onMessage.addListener((message) => {
      if (message.type === 'socketMessage') {
        setMessages((prevMessages) => [...prevMessages, message.data]);
      }
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h3>Mesh App Example</h3>
        <div className="OpenLink">
          <OpenLinkWebSDK />
        </div>
      </header>
      <div>
        <h1>Messages from Background Script</h1>
        <div id="messages">
          {messages.map((msg, index) => (
            <p key={index}>{msg}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
