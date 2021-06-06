import './style.css';
import React from 'react';

export const Input = ({ label, error, ...restProps }) => {
  return (
    <label>
      {label}
      <input {...restProps} />
      {error && <div className="error">{error}</div>}
    </label>
  );
};
