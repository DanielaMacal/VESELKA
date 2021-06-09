import React from 'react';
import './style.css';

export const SheHeSays = (props) => {
  return (
    <>
      <h2>ONA řekne / ON řekne</h2>
      <div>
        {bride && <h3 className="bride">{props.bride}</h3>}
        <p className="brideAbout">{props.brideAbout}</p>
        <img className="bridePicture" src={props.bridePicture} />
      </div>
      <div>
        <h3 className="groom">{props.groom}</h3>
        <p className="groomAbout">{props.groomAbout}</p>
        <img className="groomPicture" src={props.groomPicture} />
      </div>
    </>
  );
};
