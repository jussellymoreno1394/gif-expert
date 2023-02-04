import { useState } from 'react';

export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const inputVal = inputValue.trim();
    if (inputVal.length < 1) return;
    onAddCategory(inputVal);
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Search gif'
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
