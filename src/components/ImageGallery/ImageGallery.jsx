// import React, { Component } from 'react';
import css from 'components/ImageGallery/ImageGallery.module.css';

export const ImageGallery = ({ children }) => {
  return <ul className={css.ImageGallery}>{children}</ul>;
};
