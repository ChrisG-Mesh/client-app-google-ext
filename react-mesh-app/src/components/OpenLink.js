import React, { useState } from 'react';

const OpenLink = () => {
  const [iFrameUrl, setIFrameUrl] = useState(null);
  const [showIframe, setShowIframe] = useState(false);

  const fetchData = async () => {
    try {
      // this is referencing the endpoint used by the Next-app
      const response = await fetch('http://localhost:3000/api/getCatalogLink', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response error');
      }

      const result = await response.json();
      setIFrameUrl(result.iFrameUrl);
    } catch (error) {
      console.error('Error fetching the API', error);
    }
  };

  const handleOpenIframe = () => {
    if (!iFrameUrl) {
      fetchData();
    }
    setShowIframe(true);
  };

  return (
    <div>
      <button onClick={handleOpenIframe}>Open Mesh Catalog</button>
      {showIframe && iFrameUrl && (
        <div>
          <h5>GET Catalog Link success</h5>
          <iframe src={iFrameUrl} style={{ width: '400px', height: '600px', border: 'none' }} />
        </div>
      )}
    </div>
  );
};

export default OpenLink;
