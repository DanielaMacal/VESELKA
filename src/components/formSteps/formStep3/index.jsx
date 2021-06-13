import React from 'react';
import { Input } from '../../Inputs';
import { Formik } from 'formik';
import './style.css';

export const FormStep3 = ({ errors, values, handleChange }) => {
  return (
    <div className="formStep3">
      <h2 className="popis3">Sem přidej Vaše svatební menu</h2>
      <p> Bla bla bla bla bla</p>
      <div className="container3">
        <div className="weddingFood">
          <div className="inputs1">
            <Input
              className="input"
              type="text"
              name="starter"
              label="Předkrm"
              value={values.starter}
              onChange={handleChange('starter')}
              error={errors.starter}
            />

            <Input
              className="input"
              type="text"
              name="main"
              label="Hlavní chod"
              value={values.main}
              onChange={handleChange('main')}
              error={errors.main}
            />

            <Input
              className="input"
              type="text"
              name="main2"
              label="Hlavní chod (2)"
              value={values.main2}
              onChange={handleChange('main2')}
              error={errors.main2}
            />
          </div>
          <div className="inputs2">
            <Input
              className="input"
              type="text"
              name="desert"
              label="Dezert"
              value={values.desert}
              onChange={handleChange('desert')}
              error={errors.desert}
            />

            <Input
              className="input"
              type="text"
              name="dinner"
              label="Večeře"
              value={values.dinner}
              onChange={handleChange('dinner')}
              error={errors.dinner}
            />

            <Input
              className="input"
              type="text"
              name="drinksNonAlco"
              label="Nealkoholické nápoje"
              value={values.drinksNonAlco}
              onChange={handleChange('drinksNonAlco')}
              error={errors.drinksNonAlco}
            />
          </div>
          <div className="inputs3">
            <Input
              className="input"
              type="text"
              name="drinksAlco"
              label="Alkoholické nápoje"
              value={values.drinksAlco}
              onChange={handleChange('drinksAlco')}
              error={errors.drinksAlco}
            />

            <Input
              className="input"
              type="text"
              name="others"
              label="Jiné"
              value={values.others}
              onChange={handleChange('others')}
              error={errors.others}
            />
            <Input
              className="input"
              type="text"
              name="others"
              label="Jiné"
              value={values.others}
              onChange={handleChange('others')}
              error={errors.others}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
