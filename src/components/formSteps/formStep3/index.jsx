import 'style.css';
import React from 'react';
import { Input } from '../Inputs';

export const FormStep3 = () => {
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
      onSubmit={onSubmit}
    >
      {({
        values
      })
      =>( 
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
          value=""
        />
        <Input
          className=""
          type="text"
          name="main"
          label="hlavný chod"
          value=""
        />
        <Input
          className=""
          type="text"
          name="main2"
          label="hlavný chod 2"
          value=""
        />
        <Input className="" type="text" name="desert" label="dezert" value="" />

        <Input className="" type="text" name="dinner" label="večera" value="" />

        <Input
          className=""
          type="text"
          name="drinksNonAlco"
          placeholder="nápoje nealko"
          value=""
        />
        <Input
          className=""
          type="text"
          name="drinksAlco"
          label="nápoje alko"
          value=""
        />
        <Input className="" type="text" name="others" label="iné" value="" />
      </div>
    </div>
    )}
    </Formik>
  );
};
