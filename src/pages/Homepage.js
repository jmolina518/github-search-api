import { useState, useEffect } from 'react';
import ListItem from '../components/ListItem';
import { useParams, NavLink } from 'react-router-dom';

function Homepage({ term }) {
  let { page } = useParams();
  if (isNaN(page)) page = 1;
  page = +page;
  const [searchResults, setSearchResults] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  console.log(page);
  useEffect(() => {
    console.log(term);
    const search = async () => {
      fetch(
        `https://api.github.com/search/users?q=${term}&per_page=20&sort=followers&page=${page}`,
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
          setTotalPages(Math.ceil(data.total_count / 20));
          setSearchResults(data.items);
        });
    };
    search();
  }, [term, page]);

  return (
    <div className='App'>
      <ul>
        {searchResults &&
          searchResults.map((user) => (
            <ListItem key={user.login} user={user} />
          ))}
      </ul>
      {page >= 2 && 2 < totalPages && (
        <NavLink to={'/' + (page - 1)} exact>
          Previous Page
        </NavLink>
      )}
      {page < totalPages && (
        <NavLink to={'/' + (page + 1)} exact>
          Next Page
        </NavLink>
      )}
      {totalPages}
    </div>
  );
}

export default Homepage;
