import { useState, useEffect } from 'react';
import ListItem from '../components/ListItem';
import { useParams } from 'react-router-dom';

function Homepage({ term }) {
  let { slug } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      fetch(
        `https://api.github.com/search/users?q=${term}&per_page=20&sort=followers`,
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
    search();
  }, [term]);

  return (
    <div className='App'>
      <ul>
        {searchResults &&
          searchResults.map((user) => (
            <ListItem key={user.login} user={user} />
          ))}
      </ul>
    </div>
  );
}

export default Homepage;
