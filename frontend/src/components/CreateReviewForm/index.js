import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateReviewForm from './CreateReviewForm';



function CreateListingModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="login-button">
        <button onClick={() => setShowModal(true)}>Leave a review!</button>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateReviewForm  />
        </Modal>
      )}
    </>
  );
}

export default CreateListingModal;
