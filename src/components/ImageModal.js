import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      closeTimeoutMS={200}
      className="modal"
    >
      <div className="modal__title">
        <img src={image.user.profile_image} alt="Avatar" />
      </div>
      {console.log(image)}
      <div className="modal__body">
        <img
          src={image.url}
          alt={image.alt_description ? image.alt_description : "Car"}
        />
        {image.description && <p>{image.description}</p>}
        <button className="button--close" onClick={onRequestClose}>
          &times;
        </button>
      </div>
    </Modal>
  );
};

export default ImageModal;
