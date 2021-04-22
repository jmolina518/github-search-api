import { useState } from 'react';

const SearchBar = ({ setTerm }) => {
  const [search, setSearch] = useState('');
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setTerm(search);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type='text'
        value={search}
        placeholder='Enter Name Here'
      />
      <button type='submit'>Search</button>
    </form>
  );
};

export default SearchBar;
