import React, { useState } from 'react';
import './MeshForm.css';
import config from '../config';

const MeshForm = () => {
  const [selectedBroker, setSelectedBroker] = useState("Mesh Catalog");
  const [buttonVisible, setButtonVisible] = useState(true);

  const baseUrl = config.BASE_URL; //define your URL in a config.js file in the src directory
  
  const handleBrokerChange = (event) => {
    setSelectedBroker(event.target.value);
    setButtonVisible(event.target.value !== '');
  };

  const handleOpenPopupClick = () => {
    if (selectedBroker === "Mesh Catalog"){
      window.open(`${baseUrl}/meshPopup`, 'MeshLinkPopup', 'width=400,height=600');
    }
    else {
      window.open(`${baseUrl}/meshPopup?broker=${selectedBroker}`, 'MeshLinkPopup', 'width=400,height=600');
      popupWindow.document.title = 'Mesh Popup Window';
      popupWindow.document.body.style.backgroundColor = '#f0f0f0';
    }
  };

  return (
    <div className="direct-broker-container">
      <label htmlFor="broker-select">Use Mesh Link:</label>
      <select id="broker-select" value={selectedBroker} onChange={handleBrokerChange}>
        <option value="Coinbase">Coinbase</option>
        <option value="Binance">Binance</option>
        <option value="Robinhood">Robinhood</option>
        <option value="Mesh Catalog">Mesh Catalog</option>
      </select>
      {buttonVisible && (
        <button className="open-popup-button" onClick={handleOpenPopupClick}>
          Open {selectedBroker}
        </button>
      )}
    </div>
  );
};

export default MeshForm;