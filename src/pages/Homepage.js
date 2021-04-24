import { useState, useEffect } from 'react';
import ListItem from '../components/ListItem';
import { useParams, NavLink, useHistory } from 'react-router-dom';

function Homepage({ term }) {
  let history = useHistory();
  let { page } = useParams();
  if (isNaN(page)) page = 1;
  page = +page;
  const [searchResults, setSearchResults] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  useEffect(() => {
    const search = async () => {
      fetch(
        `https://api.github.com/search/users?q=${term}&per_page=5&sort=followers&page=${page}`,
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
          setTotalPages(Math.ceil(data.total_count / 5));
          setSearchResults(data);
        });
    };
    if (term) {
      search();
    }
  }, [term, page]);

  useEffect(() => {
    history.push('/');
  }, [term, history]);

  return (
    <div className='App'>
      <ul className='row'>
        {searchResults?.items?.map((user) => (
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
      {searchResults.items && (
        <div>Total count:{searchResults?.total_count}</div>
      )}
    </div>
  );
}

export default Homepage;
