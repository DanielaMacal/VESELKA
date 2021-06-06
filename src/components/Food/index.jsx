import React from 'react';
import './style.css';

export const Food = (props) => {
  return (
    <>
      <div>
        <h3 className="foodDetails">MENU</h3>
        <ul>
          <li>Předkrm: {props.starter}</li>
          <li>Hlavní chod I.var.: {props.main}</li>
          <li>Hlavní chod II.var.: {props.main2}</li>
          <li>Dezert: {props.desert}</li>
          {'\n'}
          <li>Večeře: {props.dinner}</li>
          {'\n'}
          <li>Nealkoholické nápoje: {props.drinksNonAlco}</li>
          <li>Alkoholické nápoje: {props.drinksAlco}</li>
          {'\n'}
          <li>Ostatní: {props.others}</li>
        </ul>
      </div>
    </>
  );
};
