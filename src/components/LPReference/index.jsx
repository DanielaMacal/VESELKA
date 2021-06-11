import React from 'react';
import './style.css';
import man from './img/man.jpg';
import woman from './img/woman.jpg';
import quoMarks from './img/uvozov.png';

export const LPReference = () => {
  return (
    <div className="reference">
      <h2>Lidé zbožňují Veselky!...blablabla</h2>
      <div className="allReferences">
        <div className="reference1">
          <div className="referenceText">
            <p className="message">
              <img className="quoMarks" src={quoMarks} alt="Uvozovky" />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
              saepe ipsam veritatis explicabo culpa animi laudantium ut enim sit
              doloribus."
            </p>
            <p className="name">Vendelín</p>
          </div>
          <img className="avatar" src={man} alt="Vendelín" />
        </div>
        <div className="reference2">
          <div className="referenceText">
            <p className="message">
              <img className="quoMarks" src={quoMarks} alt="Uvozovky" />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
              saepe ipsam veritatis explicabo cul."
            </p>
            <p className="name">Hromnice</p>
          </div>

          <img className="avatar" src={woman} alt="Hromnice" />
        </div>
      </div>
    </div>
  );
};
