import { useState } from 'react';
import ListItem from './components/ListItem';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [inputResult, setInputResult] = useState('');

  const search = (event) => {
    event.preventDefault();
    fetch(
      `https://api.github.com/search/users?q=${inputResult}&per_page=20&sort=followers`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setSearchResults(data.items);
      });
  };
  const handleChange = (event) => {
    setInputResult(event.target.value);
  };
  return (
    <div className='App'>
      <form onSubmit={search}>
        <input
          onChange={handleChange}
          type='text'
          value={inputResult}
          placeholder='Enter Name Here'
        />
        <button type='submit'>Search</button>
      </form>
      <ul>
        {searchResults &&
          searchResults.map((user) => (
            <ListItem key={user.login} user={user} />
          ))}
      </ul>
    </div>
  );
}

export default App;
