import React, { useEffect } from 'react';
import css from 'components/Modal/Modal.module.css';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ imageURL, tags, onClose }) => {
  useEffect(() => {
    const onEscClick = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onEscClick);
    // document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onEscClick);
      // document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const onBackdropClick = e => {
    if (e.currentTarget !== e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={css.Overlay} onClick={(onBackdropClick, onClose)}>
      <div className={css.Modal}>
        <img src={imageURL} alt={tags} />
      </div>
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  imageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
