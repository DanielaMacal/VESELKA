import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '../button';

import './style.css';

export const LPLastCall = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/create`);
  };

  return (
    <div className="lastCall">
      <h2>Vytvořte si krásnou a přehlednou stránku pro Vaši VESELKU i Vy.</h2>
      <Button text="Začít plánovat" onClick={handleClick} />
    </div>
  );
};
