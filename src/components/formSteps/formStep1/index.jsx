import React from 'react';
import { Input } from '../../Inputs';
import './style.css';

export const FormStep1 = ({ errors, values, handleChange }) => {
  return (
    <div className="container">
      <div className="formStep1">
        <h2> Tvá VESELKA </h2>
        <div className="inputs1">
          <Input
            className="input7"
            type="text"
            name="nickname"
            placeholder="nickname"
            value={values.nickname}
            onChange={handleChange('nickname')}
            error={errors.nickname}
          />

          <Input
            className="input7"
            type="password"
            name="password"
            placeholder="heslo"
            value={values.password}
            onChange={handleChange('password')}
            error={errors.password}
          />

          {/* <Button className="" text="Edituj" onClick={() => {}} /> */}
        </div>
      </div>
    </div>
  );
};
