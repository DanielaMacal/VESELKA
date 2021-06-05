import 'style.css';
import React from 'react';
import { Input } from '../../Inputs';

export const FormStep1 = () => {
  return (
    <div className="formStep1">
      <header className="formStep1Header"></header>
      <h1> Tvá veselka </h1>
      <Input
        className=""
        type="text"
        name="nickname"
        palceholder="nickname"
        value=""
      />

      <Input
        className=""
        type="password"
        name="heslo"
        palceholder="heslo"
        value=""
      />
    </div>
  );
};
