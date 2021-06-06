import React from 'react';
import { Input } from '../../Inputs';
import { Formik } from 'formik';

export const FormStep2 = ({ errors, values, handleChange }) => {
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
          error={errors.date}
        />
        <Input
          className=""
          type="text"
          name="weddingPlace"
          label="miesto svadby"
          value={values.weddingPlace}
          onChange={handleChange('weddingPlace')}
          error={errors.weddingPlace}
        />
        <Input
          className=""
          type="text"
          name="celebrationPlace"
          label="miesto oslavy"
          value={values.celebrationPlace}
          onChange={handleChange('celebrationPlace')}
          error={errors.celebrationPlace}
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
          error={errors.weddingProgram}
        />
        <Input
          className=""
          type="time"
          name="timeTo"
          label="čas do"
          value={values.timeTo}
          onChange={handleChange('timeTo')}
          error={errors.timeTo}
        />
        <Input
          className=""
          type="text"
          name="program"
          label="čo sa bude diať"
          value={values.program}
          onChange={handleChange('program')}
          error={errors.program}
        />
      </div>
    </div>
  );
};
