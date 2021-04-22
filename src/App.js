import Homepage from './pages/Homepage';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Switch>
      <Route path='/'>
        <Homepage />
      </Route>
    </Switch>
  );
};

export default App;
