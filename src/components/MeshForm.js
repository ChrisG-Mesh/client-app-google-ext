import React, { useState, useEffect } from 'react';
import './MeshForm.css';

const MeshForm = () => {
  const [selectedBroker, setSelectedBroker] = useState("Mesh Catalog");
  const [buttonVisible, setButtonVisible] = useState(true);
  const [popupWindow, setPopupWindow] = useState(null);

  const baseUrl = process.env.REACT_APP_PORTAL_BASE_URL; // Define your URL in a .env file in the src directory

  const handleBrokerChange = (event) => {
    setSelectedBroker(event.target.value);
    setButtonVisible(event.target.value !== '');
  };

  const handleOpenPopupClick = () => {
    const url = selectedBroker === "Mesh Catalog"
      ? `${baseUrl}/meshPopup`
      : `${baseUrl}/meshPopup?broker=${selectedBroker}`;
    const newPopupWindow = window.open(url, 'MeshLinkPopup', 'width=400,height=600');

    if (newPopupWindow) {
      setPopupWindow(newPopupWindow);
    }
  };

  useEffect(() => {
    const checkPopupClosed = () => {
      if (popupWindow && popupWindow.closed) {
        setPopupWindow(null);
        // Perform any necessary cleanup or state updates here
        console.log("Popup window closed");
      }
    };

    const intervalId = setInterval(checkPopupClosed, 1000);

    return () => clearInterval(intervalId);
  }, [popupWindow]);

  return (
    <div className="mesh-form-container">
      <label htmlFor="mesh-form-select">Use Mesh Link:</label>
      <select id="mesh-form-select" value={selectedBroker} onChange={handleBrokerChange}>
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
