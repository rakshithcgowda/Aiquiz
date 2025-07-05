import React, { useState } from 'react';
import Pricing from './Pricing';
import PopupModal from './PopupModal';

function PricingWithPopup() {
  const [showModal, setShowModal] = useState(false);

  const handleInquire = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Pricing onInquire={handleInquire} />
      <PopupModal show={showModal} onClose={handleCloseModal} />
    </>
  );
}

export default PricingWithPopup;
