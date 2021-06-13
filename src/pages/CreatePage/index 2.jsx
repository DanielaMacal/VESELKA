import 'style.css';
import React, { useState } from 'react';
import { Formik } from 'formik';
import { FormStep1 } from '../../components/formSteps/formStep1';
import { FormStep2 } from '../../components/formSteps/formStep2';
import { FormStep3 } from '../../components/formSteps/formStep3';

export const CreatePage = (props) => {
  const [step, setStep] = useState(0);
  const formikPages = [<FormStep1 />, <FormStep2 />, <FormStep3 />];

  const isLastStep = () => step === formikPages.length - 1;

  return (
    <Formik
      initialValues={{
        nickname: '',
        password: '',
        weddingPlace: '',
        celebrationPlace: '',
        time: '',
        program: '',
        starter: '',
        main: '',
        main2: '',
        desert: '',
        dinner: '',
        drinksNonAlco: '',
        drinksAlco: '',
        others: '',
      }}
      onSubmit={async ({
        nickname,
        password,
        weddingPlace,
        celebrationPlace,
        time,
        program,
        starter,
        main,
        main2,
        desert,
        dinner,
        drinksNonAlco,
        drinksAlco,
        others,
      }) => {
        if (isLastStep()) {
          await props.onSubmit({
            nickname,
            password,
            weddingPlace,
            celebrationPlace,
            time,
            program,
            starter,
            main,
            main2,
            desert,
            dinner,
            drinksNonAlco,
            drinksAlco,
            others,
          });
        } else {
          setStep((s) => s + 1);
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
};
