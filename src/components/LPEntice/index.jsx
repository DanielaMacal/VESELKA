import React from 'react';
import './style.css';
import imageNahled from './img/imageNahled.png';

export const LPEntice = () => {
  return (
    <div className="entice">
      <div className="enticeText">
        <h2 className="enticeH2">Informace o Vaší svatbě na jednom místě.</h2>
        <p className="enticeTextP">
          Vytvořte si osobní web pro svou svatbu.
          <br />
          Díky tomu budete mít všechny informace pohromadě a jednuše je budete
          moct sdílet se svými blízkými, se kterými chcete trávit svůj velký
          den.
          <br />
          Web naplníte přesně těmi informacemi, které potřebujete.
        </p>
      </div>
      <img
        className="enticeImg"
        src={imageNahled}
        alt="Náhled budoucích stránek"
      />
    </div>
  );
};
