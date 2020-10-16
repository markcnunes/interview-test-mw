import React from "react";
import ImageModal from "./ImageModal";

export default function Gallery({ images }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [image, setImage] = React.useState(null);
  const openModal = (img) => {
    setImage(img);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setImage(null);
  };

  return (
    <>
      <div className="gallery">
        {images &&
          images.map((img) => (
            <div className="gallery__item" key={img.id}>
              <div className="gallery__item__wrapper">
                <div
                  className="gallery__item__image"
                  style={{ backgroundImage: `url(${img.url})` }}
                ></div>
                <div className="gallery__item__avatar">
                  <img src={img.user.profile_image} alt="Avatar" />
                  <button
                    className="button button--primary"
                    onClick={() => openModal(img)}
                    title="View image"
                  >
                    View image
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      {image && (
        <ImageModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          image={image}
        />
      )}
    </>
  );
}
