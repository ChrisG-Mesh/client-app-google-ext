import React, { useState, useEffect } from 'react';
import { createLink } from '@meshconnect/web-link-sdk';

const OpenLinkWebSDK = () => {
  const [linkConnection, setLinkConnection] = useState(null);
  const [linkToken, setLinkToken] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchLinkToken = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:3000/api/linkTokenCall', {
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
      console.error('Error fetching link token:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const link = createLink({
      clientId: "b7007f87-c050-40cf-7777-08dc6f959a47", // hard coded for now
      onIntegrationConnected: (data) => {
        console.log('Integration connected:', data);
      },
      onEvent: (event) => {
        console.info('Mesh EVENT', event);
        if (event.type === 'close') {
          console.log('Close event occurred in Mesh modal');
        }
      },
      onExit: (error) => {
        if (error) {
          console.error('Link exited with error:', error);
        } else {
          console.log('Link exited successfully');
        }
      }
    });
    setLinkConnection(link);
  }, []);

  const handleButtonClick = async () => {
    if (!linkToken) {
      await fetchLinkToken();
    }
    if (linkConnection && linkToken) {
      linkConnection.openLink(linkToken);
    }
  };

  return (
    <div>
      <button onClick={handleButtonClick} disabled={loading}>
        {loading ? 'Loading...' : 'OpenLink via SDK'}
      </button>
      {error && <p>Error: {error}</p>}
      {linkToken && <p>Link Token: {linkToken}</p>}
    </div>
  );
};

export default OpenLinkWebSDK;
