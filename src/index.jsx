import React from 'react';
import { render } from 'react-dom';
import './style.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { EditPage } from './pages/EditPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/edit" exact>
          <EditPage />
        </Route>
      </Switch>
    </Router>
  );
};

render(<App />, document.querySelector('#app'));
