import React from 'react';
import { render } from 'react-dom';
import './style.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => <div className="container"></div>;

render(<App />, document.querySelector('#app'));
