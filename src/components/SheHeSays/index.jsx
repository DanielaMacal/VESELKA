import React from 'react';
import heart from './img/heart.png';
import './style.css';

export const SheHeSays = (props) => {
  return (
    <div className="sheHeSays">
      <h2>ONA řekne / ON řekne</h2>
      <div className="sheHe">
        <div className="brideSHS">
          <img className="bridePicture" src={props.bridePicture} />
          <h3 className="bride">{props.bride}</h3>
          <p className="brideAbout">{props.brideAbout}</p>
        </div>
        <img className="heart" src={heart} alt="Srdce" />
        <div className="groomSHS">
          <img className="groomPicture" src={props.groomPicture} />
          <h3 className="groom">{props.groom}</h3>
          <p className="groomAbout">{props.groomAbout}</p>
        </div>
      </div>
    </div>
  );
};
