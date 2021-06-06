import React from 'react';
import { Input } from '../../Inputs';

export const FormStep1 = ({ values, handleChange }) => {
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
      />

      <Input
        className=""
        type="password"
        name="password"
        placeholder="heslo"
        value={values.password}
        onChange={handleChange('password')}
      />
      {/* <Button className="" text="Edituj" onClick={() => {}} /> */}
    </div>
  );
};
