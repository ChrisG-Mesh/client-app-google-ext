// src/components/MyComponent.js
import React, { useState } from 'react';

const MakeAPICall = () => {
  const [linkToken, setLinkToken] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/makeAPIcall', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response error');
      }

      const result = await response.json();
      setLinkToken(result.linkToken);
    } catch (error) {
      console.error('Error fetching the API', error);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {linkToken ? (
        <div>
          <h1>Mesh Link UI</h1>
          <iframe
            id="mesh-link-iframe"
            src={`https://web.getfront.com/b2b-iframe/b7007f87-c050-40cf-7777-08dc6f959a47/broker-connect?auth_code=${linkToken}`}
            width="100%"
            height="600px"
            frameBorder="0"
          ></iframe>
        </div>
      ) : (
        <div>No data fetched yet.</div>
      )}
    </div>
  );
};

export default MakeAPICall;