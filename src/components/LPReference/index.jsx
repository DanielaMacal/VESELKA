import React from 'react';
import './style.css';
import man from './img/man.jpg';
import woman from './img/woman.jpg';
import quoMarks from './img/uvozov.png';

export const LPReference = () => {
  return (
    <div className="reference">
      <h2 className="referenceH2">Lidé zbožňují VESELKY!</h2>
      <div className="allReferences">
        <div className="reference1">
          <div className="referenceText">
            <p className="message">
              <img className="quoMarks" src={quoMarks} alt="Uvozovky" />
              Díky VESELCE jsem nemusel oslovovat svého kamaráda a okrádat ho o
              jeho volný čas, aby mi vytvořil osobní svatební stránky."
            </p>
            <p className="name">Vendelín</p>
          </div>
          <img className="avatar" src={man} alt="Vendelín" />
        </div>
        <div className="reference2">
          <div className="referenceText">
            <p className="message">
              <img className="quoMarks" src={quoMarks} alt="Uvozovky" />
              Všem stačilo jen rozeslat odkaz a nemuseli jsme každému zvlášť
              zodpovídat otázky. VESELKA je boží!"
            </p>
            <p className="name">Hromnice</p>
          </div>

          <img className="avatar" src={woman} alt="Hromnice" />
        </div>
      </div>
    </div>
  );
};
