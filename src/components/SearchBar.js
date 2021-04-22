import React from 'react';

const SearchBar = ({ term, setTerm }) => {
  return (
    <form onSubmit={setTerm}>
      <input
        onChange={setTerm}
        type='text'
        value={term}
        placeholder='Enter Name Here'
      />
      <button type='submit'>Search</button>
    </form>
  );
};

export default SearchBar;
