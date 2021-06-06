import React, { useState } from 'react';
import { Formik } from 'formik';
import { FormStep1 } from '../../components/formSteps/formStep1';
import { FormStep2 } from '../../components/formSteps/formStep2';
import { FormStep3 } from '../../components/formSteps/formStep3';
import { db } from '../../db';
import { useHistory } from 'react-router-dom';
import { Button } from '../../components/button';

export const CreatePage = (props) => {
  const history = useHistory();

  const [step, setStep] = useState(0);

  const onSubmit = async (values) => {
    if (isLastStep()) {
      const res = await db.collection('veselka').add(values);
      history.push(`/preview/${res.id}`);
    } else {
      setStep((s) => s + 1);
    }
  };
  const formikPages = [
    <FormStep1 onSubmit={onSubmit} />,
    <FormStep2 onSubmit={onSubmit} />,
    <FormStep3 onSubmit={onSubmit} />,
  ];

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
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <>
          {formikPages[step]}
          {step > 0 && (
            <Button onClick={() => setStep((s) => s - 1)} text="zpet" />
          )}
          <Button onClick={() => handleSubmit()} text="dalej" />
        </>
      )}
    </Formik>
  );
};
