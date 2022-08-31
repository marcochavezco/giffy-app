import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const changeHandler = ({ target }) => {
    setInputValue(target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;

    setInputValue('');
    onAddCategory(inputValue.trim());
  };

  return (
    <form onSubmit={submitHandler} aria-label='form'>
      <input
        type='text'
        placeholder='Buscar gifs'
        onChange={changeHandler}
        value={inputValue}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onAddCategory: PropTypes.func.isRequired,
};
