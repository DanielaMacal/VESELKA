import React from 'react';
import './style.css';

export const LPReference = () => {
  return (
    <div className="reference">
      <h2>Lidé zbožňují Veselky!...blablabla</h2>
      <div className="allReferences">
        <div className="reference1">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui saepe
            ipsam veritatis explicabo culpa animi laudantium ut enim sit
            doloribus
          </p>
          <image className="avatar1" src="img/man.jpg" alt="Vendelín" />
          <p>Vendelín</p>
        </div>
        <div className="reference2">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui saepe
            ipsam veritatis explicabo cul
          </p>
          <image className="avatar2" src="img/man.jpg" alt="Hromnice" />
          <p>Hromnice</p>
        </div>
      </div>
    </div>
  );
};
