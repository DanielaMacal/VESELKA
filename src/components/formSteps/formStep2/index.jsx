import React from 'react';
import { Input } from '../../Inputs';
import { Formik } from 'formik';

export const FormStep2 = ({ values, handleChange }) => {
  return (
    <div className="formStep2">
      <div className="weddingPlace">
        <h1>Sem přidej detaily o Vaší svatbě</h1>
        <p> Bla bla bla bla bla</p>
        <Input
          className=""
          type="date"
          name="date"
          label="dátum"
          value={values.date}
          onChange={handleChange('date')}
        />
        <Input
          className=""
          type="text"
          name="weddingPlace"
          label="miesto svadby"
          value={values.weddingPlace}
          onChange={handleChange('weddingPlace')}
        />
        <Input
          className=""
          type="text"
          name="celebrationPlace"
          label="miesto oslavy"
          value={values.celebrationPlace}
          onChange={handleChange('celebrationPlace')}
        />
      </div>

      <div className="weddingProgram">
        <h2>Popište program Vaší svatby</h2>
        <Input
          className=""
          type="time"
          name="timeFrom"
          label="čas od"
          value={values.timeFrom}
          onChange={handleChange('timeFrom')}
        />
        <Input
          className=""
          type="time"
          name="timeTo"
          label="čas do"
          value={values.timeTo}
          onChange={handleChange('timeTo')}
        />
        <Input
          className=""
          type="text"
          name="program"
          label="čo sa bude diať"
          value={values.program}
          onChange={handleChange('program')}
        />
      </div>
    </div>
  );
};
