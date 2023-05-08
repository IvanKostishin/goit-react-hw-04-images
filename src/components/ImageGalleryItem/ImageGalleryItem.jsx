import css from 'components/ImageGalleryItem/ImageGalleryItem.module.css';
// import { Modal } from 'components/Modal/Modal';
import React from 'react';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ images, takeDataImage }) => {
  return (
    images.length !== 0 &&
    images.map(({ id, webformatURL, tags, largeImageURL }) => {
      return (
        <li className={css.ImageGalleryItem} key={id} onClick={takeDataImage}>
          <img
            src={webformatURL}
            data-large={largeImageURL}
            alt={tags}
            className={css['ImageGalleryItem-image']}
          />
        </li>
      );
    })
  );
};

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  takeDataImage: PropTypes.func.isRequired,
};
