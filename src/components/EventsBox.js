import React, { useEffect, useState } from 'react';
import './EventsBox.css';

const EventsBox = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
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
  );
};

export default EventsBox;