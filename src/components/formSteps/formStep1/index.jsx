import React from 'react';
import { Input } from '../../Inputs';
import { Formik } from 'formik';

export const FormStep1 = () => {
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
      onSubmit={onSubmit}
    >
      {({ values }) => (
        <div className="formStep1">
          <h1> Tvá veselka </h1>
          <Input
            className=""
            type="text"
            name="nickname"
            placeholder="nickname"
            value=""
          />

          <Input
            className=""
            type="password"
            name="password"
            placeholder="heslo"
            value=""
          />
          {/* <Button className="" text="Edituj" onClick={() => {}} /> */}
        </div>
      )}
    </Formik>
  );
};
