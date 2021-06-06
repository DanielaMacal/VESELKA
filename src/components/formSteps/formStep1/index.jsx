import React from 'react';
import { Input } from '../../Inputs';

export const FormStep1 = ({ errors, values, handleChange }) => {
  return (
    <div className="formStep1">
      <h1> Tvá veselka </h1>
      <Input
        className=""
        type="text"
        name="nickname"
        placeholder="nickname"
        value={values.nickname}
        onChange={handleChange('nickname')}
        error={errors.nickname}
      />

      <Input
        className=""
        type="password"
        name="password"
        placeholder="heslo"
        value={values.password}
        onChange={handleChange('password')}
        error={errors.password}
      />
      {/* <Button className="" text="Edituj" onClick={() => {}} /> */}
    </div>
  );
};
