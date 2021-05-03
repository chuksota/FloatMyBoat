import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import CreateReviewForm from './CreateReviewForm';



function CreateReviewModal() {
  const [showModal, setShowModal] = useState(false);
  const {id} = useParams()

  return (
    <>

        <button className="login-button" onClick={() => setShowModal(true)}>Leave a review!</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateReviewForm id={id} />
        </Modal>
      )}
    </>
  );
}

export default CreateReviewModal;
