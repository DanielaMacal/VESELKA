import React from 'react';
import './style.css';
import entice2 from './img/entice2.jpg';

export const LPEnticeTwo = () => {
  return (
    <div className="enticeTwo">
      <img className="enticeTwoImg" src={entice2} alt="Nějaký obrázek" />
      <div className="enticeTwoText">
        <h2 className="enticeTwoH2">
          Vše, co potřebujete pro snadnější organizaci...blablabla
        </h2>
        <ul>
          <li>Bla 1</li>
          <li>Bla 2</li>
          <li>Bla 3</li>
          <li>Bla 4</li>
          <li>Bla 5</li>
        </ul>
      </div>
    </div>
  );
};
