import React from 'react';
import './style.css';
import imageNahled from './img/imageNahled.png';

export const LPEntice = () => {
  return (
    <div className="entice">
      <div className="enticeText">
        <h2>Informace o Vaší svatbě na jednom místě...blablabla</h2>
        <p className="enticeTextP">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          explicabo officia natus provident eos sunt adipisci tenetur rem
          maiores vitae, vel modi, voluptates nam veniam, doloribus consequatur
          maxime obcaecati optio?
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
