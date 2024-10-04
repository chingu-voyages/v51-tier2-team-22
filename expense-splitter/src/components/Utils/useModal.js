import { useState, useEffect } from 'react';

function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);}

  const closeModal = () => {
    setIsOpen(false);}

  // Handle Escape key press to close modal
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Handle click outside the modal to close it
  const handleClickOutside = (event) => {
    if (event.target.id === 'modal-overlay') {
      closeModal();
    }
  };

  return { isOpen, openModal, closeModal, handleClickOutside };
}

export default useModal;
