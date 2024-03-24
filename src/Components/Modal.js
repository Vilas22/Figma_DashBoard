import React, { useState, useEffect } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, children,headerText }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(isOpen); 
  }, [isOpen]);

  
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      console.log('Backdrop clicked');
      closeModal();
    }
  };

  const closeModal = () => {
    console.log('Closing modal');
    setIsModalOpen(false);
    onClose();
  };

  console.log('Rendering modal with isOpen:', isOpen);

  return (
    <>
      {isModalOpen && (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
          <div className="modal-content">
          <div className="modal-header">
              <h4>{headerText}</h4>
              <button className="modal-close-btn" onClick={closeModal}>
                &times;
              </button>
            </div>
            
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
