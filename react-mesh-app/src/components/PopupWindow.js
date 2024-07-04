import React from 'react';

const PopupComponent = ({ popupUrl }) => {
  const handleOpenPopupClick = () => {
    const popupWindow = window.open(popupUrl, 'MeshLinkPopup', 'width=800,height=600');
    if (popupWindow) {
      popupWindow.focus(); // Ensure the popup window gets focus
    } else {
      alert('Popup blocked. Please enable popups for this site.');
    }
  };

  return (
    <div>
      <button onClick={handleOpenPopupClick}>
        Open Mesh
      </button>
    </div>
  );
};

export default PopupComponent;
