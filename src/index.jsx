import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { LandingPage } from './pages/LandingPage';
import { EditPage } from './pages/EditPage';
import { PreviewPage } from './pages/PreviewPage';
import { CreatePage } from './pages/CreatePage';
import { EditFormPage } from './pages/EditFormPage';

import './style.css';
import { FinalPage } from './pages/FinalPage';

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
        <Route path="/final/:id" exact>
          <FinalPage />
        </Route>
        <Route path="/edit/:id" exact>
          <EditFormPage />
        </Route>
      </Switch>
    </Router>
  );
};

render(<App />, document.querySelector('#app'));
