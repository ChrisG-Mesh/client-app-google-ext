import React, { useState } from 'react';
import './DirectBrokerWebSDK.css';

const DirectBrokerWebSDK = () => {
  const [selectedBroker, setSelectedBroker] = useState('');
  const [buttonVisible, setButtonVisible] = useState(false);

  const handleBrokerChange = (event) => {
    setSelectedBroker(event.target.value);
    setButtonVisible(event.target.value !== '');
  };

  const handleOpenPopupClick = () => {
    const popupWindow = window.open(`http://localhost:3000/meshPopup?broker=${selectedBroker}`, 'MeshLinkPopup', 'width=400,height=600');
    if (popupWindow) {
      popupWindow.document.title = 'Mesh Popup Window';
      popupWindow.document.body.style.backgroundColor = '#f0f0f0';
    } else {
      alert('Popup blocked. Please enable popups for this site.');
    }
  };

  return (
    <div className="direct-broker-container">
      <label htmlFor="broker-select">Openlink direct to Broker:</label>
      <select id="broker-select" value={selectedBroker} onChange={handleBrokerChange}>
        <option value="">--Select a broker--</option>
        <option value="Coinbase">Coinbase</option>
        <option value="Binance">Binance</option>
        <option value="Robinhood">Robinhood</option>
      </select>
      {buttonVisible && (
        <button className="open-popup-button" onClick={handleOpenPopupClick}>
          Open {selectedBroker} Integration
        </button>
      )}
    </div>
  );
};

export default DirectBrokerWebSDK;
