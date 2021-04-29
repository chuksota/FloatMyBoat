import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateNewListing from './CreateListingForm';



function CreateListingModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="login-button">
        <button onClick={() => setShowModal(true)}>Create a new listing</button>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateNewListing  />
        </Modal>
      )}
    </>
  );
}

export default CreateListingModal;
