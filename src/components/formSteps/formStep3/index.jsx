import React from 'react';
import { Input } from '../../Inputs';
import { Formik } from 'formik';

export const FormStep3 = (props) => {
  return (
    <Formik
      initialValues={{
        starter: '',
        main: '',
        main2: '',
        desert: '',
        dinner: '',
        drinksNonAlco: '',
        drinksAlco: '',
        others: '',
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
        <div className="formStep3">
          <div className="weddingFood">
            <h1>Sem přidej detaily o Vaší svatbě</h1>
            <h2>Sem přidej Vaše svatební menu</h2>
            <p> Bla bla bla bla bla</p>
            <Input
              className=""
              type="text"
              name="starter"
              label="predkrm"
              value={values.starter}
              onChange={handleChange('starter')}
            />
            <Input
              className=""
              type="text"
              name="main"
              label="hlavný chod"
              value={values.main}
              onChange={handleChange('main')}
            />
            <Input
              className=""
              type="text"
              name="main2"
              label="hlavný chod 2"
              value={values.main2}
              onChange={handleChange('main2')}
            />
            <Input
              className=""
              type="text"
              name="desert"
              label="dezert"
              value={values.desert}
              onChange={handleChange('desert')}
            />

            <Input
              className=""
              type="text"
              name="dinner"
              label="večera"
              value={values.dinner}
              onChange={handleChange('dinner')}
            />

            <Input
              className=""
              type="text"
              name="drinksNonAlco"
              label="nealkoholické nápoje"
              value={values.drinksNonAlco}
              onChange={handleChange('drinksNonAlco')}
            />
            <Input
              className=""
              type="text"
              name="drinksAlco"
              label="nápoje alko"
              value={values.drinksAlco}
              onChange={handleChange('drinksAlco')}
            />
            <Input
              className=""
              type="text"
              name="others"
              label="iné"
              value={values.others}
              onChange={handleChange('others')}
            />
          </div>
        </div>
      )}
    </Formik>
  );
};
