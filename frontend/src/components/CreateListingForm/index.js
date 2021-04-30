import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateNewListing from './CreateListingForm';
import {useParams} from 'react-router-dom'


function CreateListingModal() {
  const [showModal, setShowModal] = useState(false);
  const {destinationId} = useParams()
  return (
    <>
      <div className="login-button">
        <button onClick={() => setShowModal(true)}>Create a new listing</button>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateNewListing  id={destinationId}/>
        </Modal>
      )}
    </>
  );
}

export default CreateListingModal;
