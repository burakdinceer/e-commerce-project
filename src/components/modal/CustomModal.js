import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CustomModal = ({setShowModal}) => {

  const closeModal = () => {
    setShowModal(false)
  }

  return (
 
    <div
    className="modal show"
    style={{ display: 'block', position: 'initial' }}
  >
    <Modal.Dialog>
      <Modal.Header >
        <Modal.Title>Numara Seçiniz...</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Button onClick={closeModal} variant="secondary">Numara Seç</Button>
      </Modal.Body>
    </Modal.Dialog>
  </div>
   
  )
}

export default CustomModal