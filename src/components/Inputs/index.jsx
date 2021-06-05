import './style.css';
import React from 'react';

export const Input = (props) => {
  return (
    <label>
      {props.label}
      <input
        className={props.className}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
      />
    </label>
  );
};
