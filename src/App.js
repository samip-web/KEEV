import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      
    {/* <Navbar /> */}
    <Switch>
      <Route exact path="/" component={Home} />
      <Redirect to="/" />
    </Switch>


    </div>
  );
}

export default App;
