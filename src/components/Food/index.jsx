import React from 'react';
import './style.css';

export const Food = (props) => {
  return (
    <div className="menu">
      <div className="menuBG">
        <h3 className="foodDetails">MENU</h3>
        <h3>Předkrm</h3>
        <p>{props.starter}</p>
        <h3>Hlavní chod I.var.</h3>
        <p> {props.main}</p>
        <h3>Hlavní chod II.var.</h3>
        <p> {props.main2}</p>
        <h3>Dezert</h3>
        <p> {props.desert}</p>
        <p className="heartSymb">♥</p>
        <h3>Večeře</h3>
        <p> {props.dinner}</p>
        <p className="heartSymb">♥</p>
        <h3>Nealkoholické nápoje</h3> <p>{props.drinksNonAlco}</p>
        <h3>Alkoholické nápoje</h3>
        <p> {props.drinksAlco}</p>
        <p className="heartSymb">♥</p>
        <h3>Ostatní</h3>
        <p>{props.others}</p>
      </div>
    </div>
  );
};
