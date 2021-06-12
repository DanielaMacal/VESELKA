import React from 'react';
import './style.css';
import entice2 from './img/entice2.jpg';

export const LPEnticeTwo = () => {
  return (
    <div className="enticeTwo">
      <img className="enticeTwoImg" src={entice2} alt="Nějaký obrázek" />
      <div className="enticeTwoText">
        <h2 className="enticeTwoH2">
          Vše, co potřebujete pro snadnější organizaci.
        </h2>
        <ul>
          <li>Vlastní svatební oznámení</li>
          <li>Osobní profily nevěsty a ženicha</li>
          <li>Důležitá data a místa</li>
          <li>Plánovaný program</li>
          <li>Informace o jídle a pití</li>
          <li>A další...</li>
        </ul>
      </div>
    </div>
  );
};
