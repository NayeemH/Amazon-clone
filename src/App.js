import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route path='/checkout'>
            <h1>chekout</h1>
          </Route>
          <Route path='/login'>
            <h1>csjbdjd</h1>
          </Route>
          <Route path='/check'>
            <h1>chekout</h1>
          </Route>
          <Route path='/'>
            <h1>Homes</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
