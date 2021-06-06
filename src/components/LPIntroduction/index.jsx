import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '../button';

import './style.css';

export const LPIntroduction = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/create`);
  };

  return (
    <div className="introdution">
      <h2>Vytvořte si web pro svou svatbu...blablabla</h2>
      <Button text="Začít plánovat" onClick={handleClick} />
    </div>
  );
};
