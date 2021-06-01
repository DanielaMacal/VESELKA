import React from 'react';
import { render } from 'react-dom';
import './style.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { LPHeader } from './components/LPHeader';
import { LPFooter } from './components/LPFooter';
import { LPIntroduction } from './components/LPIntroduction';
import { LPEntice } from './components/LPEntice';
import { LPEnticeTwo } from './components/LPEnticeTwo';
import { LPReference } from './components/LPReference';
import { LPLastCall } from './components/LPLastCall';

const App = () => {
  return (
    <Router>
      <LPHeader />
      <LPIntroduction />
      <LPEntice />
      <LPEnticeTwo />
      <LPReference />
      <LPLastCall />
      <LPFooter />
    </Router>
  );
};

render(<App />, document.querySelector('#app'));
