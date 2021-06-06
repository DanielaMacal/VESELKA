import React from 'react';
import { Input } from '../../Inputs';
import { Formik } from 'formik';

export const FormStep3 = ({ errors, values, handleChange }) => {
  return (
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
          error={errors.starter}
        />
        <Input
          className=""
          type="text"
          name="main"
          label="hlavný chod"
          value={values.main}
          onChange={handleChange('main')}
          error={errors.main}
        />
        <Input
          className=""
          type="text"
          name="main2"
          label="hlavný chod 2"
          value={values.main2}
          onChange={handleChange('main2')}
          error={errors.main2}
        />
        <Input
          className=""
          type="text"
          name="desert"
          label="dezert"
          value={values.desert}
          onChange={handleChange('desert')}
          error={errors.desert}
        />

        <Input
          className=""
          type="text"
          name="dinner"
          label="večera"
          value={values.dinner}
          onChange={handleChange('dinner')}
          error={errors.dinner}
        />

        <Input
          className=""
          type="text"
          name="drinksNonAlco"
          label="nealkoholické nápoje"
          value={values.drinksNonAlco}
          onChange={handleChange('drinksNonAlco')}
          error={errors.drinksNonAlco}
        />
        <Input
          className=""
          type="text"
          name="drinksAlco"
          label="nápoje alko"
          value={values.drinksAlco}
          onChange={handleChange('drinksAlco')}
          error={errors.drinksAlco}
        />
        <Input
          className=""
          type="text"
          name="others"
          label="iné"
          value={values.others}
          onChange={handleChange('others')}
          error={errors.others}
        />
      </div>
    </div>
  );
};
