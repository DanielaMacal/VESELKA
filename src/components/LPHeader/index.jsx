import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../button';
import './style.css';
import { useHistory } from 'react-router-dom';

export const LPHeader = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/create`);
  };

  return (
    <header className="header">
      <h1>VESELKA</h1>
      <Button text="Začít" onClick={handleClick} />
      <Link to="/edit">Edituj</Link>
      <Link to="/">Domů</Link>
    </header>
  );
};
