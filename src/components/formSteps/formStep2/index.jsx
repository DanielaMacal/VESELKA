import 'style.css';
import React from 'react';
import { Input } from '../Inputs';

export const FormStep2 = () => {
  return (
    <div className="formStep2">
      <div className="weddingPlace">
        <h1>Sem přidej detaily o Vaší svatbě</h1>
        <p> Bla bla bla bla bla</p>
        <Input className="" type="text" name="date" label="dátum" value="" />
        <Input
          className=""
          type="text"
          name="weeding place"
          label="miesto svadby"
          value=""
        />
        <Input
          className=""
          type="text"
          name="celebration place"
          label="miesto oslavy"
          value=""
        />
      </div>

      <div className="weddingProgram">
        <h2>Popište program Vaší svatby</h2>
        <Input className="" type="text" name="time" value="" />
        <Input className="" type="text" name="program" value="" />
      </div>
    </div>
  );
};
