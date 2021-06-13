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
      <div className="links">
        <Button className="buttonStart" text="Začít" onClick={handleClick} />
        <Link className="link" to="/edit">
          Editovat
        </Link>
        <Link className="link" to="/">
          Domů
        </Link>
      </div>
    </header>
  );
};
