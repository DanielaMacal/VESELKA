import React from 'react';
import { LPHeader } from '../../components/LPHeader';
import './style.css';

export const EditPage = () => {
  return (
    <>
      <LPHeader />
      <div className="editPage">
        <h2>Tvá VESELKA</h2>
        <label>
          nickname
          <input className="nickname" />
        </label>
        <label>
          heslo
          <input className="pasword" />
        </label>
        <button className="btnEdit">Edituj</button>
      </div>
    </>
  );
};
