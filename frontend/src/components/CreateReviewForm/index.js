import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import CreateReviewForm from './CreateReviewForm';



function CreateListingModal() {
  const [showModal, setShowModal] = useState(false);
  const {id} = useParams()

  return (
    <>
      <div className="login-button">
        <button onClick={() => setShowModal(true)}>Leave a review!</button>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateReviewForm id={id} />
        </Modal>
      )}
    </>
  );
}

export default CreateListingModal;
