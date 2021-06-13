import React from 'react';
import './style.css';

export const Food = (props) => {
  return (
    <div className="menu">
      <div className="menuBG">
        <h3 className="foodDetails">MENU</h3>
        <h3>Předkrm</h3>
        {props.starter && <p>{props.starter}</p>}
        <h3>Hlavní chod I.var.</h3>
        {props.main && <p> {props.main}</p>}
        <h3>Hlavní chod II.var.</h3>
        {props.main2 && <p> {props.main2}</p>}
        <h3>Dezert</h3>
        {props.desert && <p> {props.desert}</p>}
        <p className="heartSymb">♥</p>
        <h3>Večeře</h3>
        {props.dinner && <p> {props.dinner}</p>}
        <p className="heartSymb">♥</p>
        <h3>Nealkoholické nápoje</h3>{' '}
        {props.drinksNonAlco && <p>{props.drinksNonAlco}</p>}
        <h3>Alkoholické nápoje</h3>
        {props.drinksAlco && <p> {props.drinksAlco}</p>}
        <p className="heartSymb">♥</p>
        <h3>Ostatní</h3>
        {props.other && <p>{props.others}</p>}
      </div>
    </div>
  );
};
