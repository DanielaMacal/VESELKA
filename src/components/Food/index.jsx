import React from 'react';
import './style.css';

export const Food = (props) => {
  return (
    <>
      <div>
        <h3 className="foodDetails">MENU</h3>
        <ul>
          {starter && <li>Předkrm: {props.starter}</li>}
          {main && <li>Hlavní chod I.var.: {props.main}</li>}
          {main2 && <li>Hlavní chod II.var.: {props.main2}</li>}
          {desert && <li>Dezert: {props.desert}</li>}
          {'\n'}
          {dinner && <li>Večeře: {props.dinner}</li>}
          {'\n'}
          {drinksNonAlco && (
            <li>Nealkoholické nápoje: {props.drinksNonAlco}</li>
          )}
          {drinksAlco && <li>Alkoholické nápoje: {props.drinksAlco}</li>}
          {'\n'}
          {other && <li>Ostatní: {props.others}</li>}
        </ul>
      </div>
    </>
  );
};
