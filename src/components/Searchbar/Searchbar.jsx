import css from 'components/Searchbar/Searchbar.module.css';
import { Formik, Form, Field } from 'formik';
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

const initialValue = { query: '' };

export const Searchbar = ({ onSubmitForm }) => {
  const onSubmit = ({ query }, { resetForm }) => {
    if (query.trim() === '') {
      return toast.warn('Enter a search query');
    }
    onSubmitForm(query);
    resetForm();
  };

  return (
    <header className={css.Searchbar}>
      <Formik initialValues={initialValue} onSubmit={onSubmit}>
        <Form className={css.SearchForm}>
          <button type="submit" className={css['SearchForm-button']}>
            <span className={css['SearchForm-button-label']}>Search</span>
          </button>
          <Field
            id="query"
            className={css['SearchForm-input']}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Formik>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};
