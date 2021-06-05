import 'style.css';
import React from 'react';
import { Input } from '../Inputs';

export const FormStep2 = () => {
  return (
    <Formik
      initialValues={{
        weddingPlace: '',
        celebrationPlace: '',
        time: '',
        program: '',
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
        <div className="formStep2">
          <div className="weddingPlace">
            <h1>Sem přidej detaily o Vaší svatbě</h1>
            <p> Bla bla bla bla bla</p>
            <Input
              className=""
              type="text"
              name="date"
              label="dátum"
              value=""
            />
            <Input
              className=""
              type="text"
              name="weddingPlace"
              label="miesto svadby"
              value=""
            />
            <Input
              className=""
              type="text"
              name="celebrationPlace"
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
      )}
    </Formik>
  );
};
