import './style.css';
import React from 'react';

export const Input = ({ label, ...restProps }) => {
  return (
    <label>
      {label}
      <input {...restProps} />
    </label>
  );
};
