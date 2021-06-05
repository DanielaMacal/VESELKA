import 'style.css';
import React from 'react';

export const Button = (props) => {
  return (
    <button className={`button ${props.className}`} onClick={() => onClick()}>
      {props.text}
    </button>
  );
};
