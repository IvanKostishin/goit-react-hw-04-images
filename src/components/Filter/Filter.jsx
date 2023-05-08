import css from 'components/Filter/Filter.module.css';
import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ value, onFilterContacts }) => {
  // console.log('Filter:');
  return (
    <>
      <label className={css.title}>
        Find contact by name
        <input
          type="text"
          value={value}
          name="filter"
          onChange={onFilterContacts}
          placeholder="Enter the filter value..."
        />
      </label>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onFilterContacts: PropTypes.func,
};
