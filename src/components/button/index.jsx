import React from 'react';

export const Button = (props) => {
  return (
    <button
      className={`button ${props.className}`}
      onClick={() => props.onClick()}
      type={props.type || 'button'}
    >
      {props.text}
    </button>
  );
};
