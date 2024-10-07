import { useState, useEffect } from 'react';

function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);}

  const closeModal = () => {
    setIsOpen(false);}

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const handleClickOutside = (event) => {
    if (event.target.id === 'modal-overlay') {
      closeModal();
    }
  };

  return { isOpen, openModal, closeModal, handleClickOutside };
}

export default useModal;
