import React from 'react';
import { Input } from '../../Inputs';
import { Formik } from 'formik';

export const FormStep1 = (props) => {
  return (
    <Formik
      initialValues={{
        nickname: '',
        password: '',
      }}
      // validate={(values) => {
      //   const errors = {};
      //   if (!values.email) {
      //     errors.email = 'Required';
      //   } else if (
      //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      //   ) {
      //     errors.email = 'Invalid email address';
      //   }
      //   return errors;
      // }}
      onSubmit={props.onSubmit}
    >
      {({ values, handleChange }) => (
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
      )}
    </Formik>
  );
};
