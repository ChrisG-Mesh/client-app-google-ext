import React from 'react';

const OpenLinkWebSDK = () => {
  const handleOpenPopupClick = () => {
    const popupWindow = window.open('http://localhost:3000/meshPopup', 'MeshLinkPopup', 'width=400,height=600');
    if (popupWindow) {
      popupWindow.document.title = 'Mesh Popup Window';
      popupWindow.document.body.style.backgroundColor = '#f0f0f0';
    } else {
      alert('Popup blocked. Please enable popups for this site.');
    }
  };

  return (
    <div>
      <button onClick={handleOpenPopupClick}>
        Open Mesh Catalog
      </button>
    </div>
  );
};

export default OpenLinkWebSDK;
