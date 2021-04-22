import Homepage from './pages/Homepage';
import SearchBar from './components/SearchBar';
import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
  const [term, setTerm] = useState('');
  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  return (
    <>
      <SearchBar term={term} setTerm={handleChange} />
      <Switch>
        <Route path='/'>
          <Homepage term={term} />
        </Route>
        <Route path='/:page'>
          <Homepage term={term} />
        </Route>
      </Switch>
    </>
  );
};

export default App;
