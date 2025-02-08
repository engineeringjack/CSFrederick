import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ images, currentImageIndex, onClose }) => {
  const [startX, setStartX] = useState(null);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!startX) return;

    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;

    if (Math.abs(diffX) > 50) {
      // Minimum distance to consider a swipe
      if (diffX > 0) {
        // Swipe left
        onNext();
      } else {
        // Swipe right
        onPrev();
      }
      setStartX(null); // Reset startX after handling swipe
    }
  };

  const onNext = () => {
    if (currentImageIndex < images.length - 1) {
      onClose(images[currentImageIndex + 1]);
    } else {
      onClose(images[0]); // Loop back to the first image
    }
  };

  const onPrev = () => {
    if (currentImageIndex > 0) {
      onClose(images[currentImageIndex - 1]);
    } else {
      onClose(images[images.length - 1]); // Loop back to the last image
    }
  };

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img
          src={images[currentImageIndex]}
          className="modal-image"
          alt="Modal Art"
        />
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
