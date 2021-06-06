import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { LandingPage } from './pages/LandingPage';
import { EditPage } from './pages/EditPage';
import { PreviewPage } from './pages/PreviewPage';
import { CreatePage } from './pages/CreatePage';

import './style.css';

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
        <Route path="/preview/:id" exact>
          <PreviewPage />
        </Route>
        <Route path="/create" exact>
          <CreatePage />
        </Route>
      </Switch>
    </Router>
  );
};

render(<App />, document.querySelector('#app'));
