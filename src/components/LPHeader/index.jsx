import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const LPHeader = () => {
  return (
    <header className="header">
      <h1>VESELKA</h1>
      <button>Začít</button>
      <Link to="/edit">Edituj</Link>
      <Link to="/">Domů</Link>
    </header>
  );
};
