import React, { useState } from 'react';
import { Formik } from 'formik';
import { FormStep1 } from '../../components/formSteps/formStep1';
import { FormStep2 } from '../../components/formSteps/formStep2';
import { FormStep3 } from '../../components/formSteps/formStep3';
import { db } from '../../db';
import { useHistory } from 'react-router-dom';
import { Button } from '../../components/button';
import * as yup from 'yup';

export const CreatePage = (props) => {
  const history = useHistory();

  const [step, setStep] = useState(0);
  const SignupSchema = Yup.object().shape({
    nickname: Yup.string('').required('pridaj prihlasovacie meno'),
    password: Yup.string('')
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('pridaj heslo'),
    date: Yup.date('').required('zadaj datum'),
    weddingPlace: Yup.string('').required('pridaj miesto svadby'),
    celebrationPlace: Yup.string('').required('pridaj miesto oslavy'),
    timeFrom: Yup.number('').required('zadaj čas začiatku'),
    timeTo: Yup.number('').required('zadaj čas konca'),
    program: Yup.string('').required('pridaj program'),
    starter: Yup.string('').required('pridaj predjedlo'),
    main: Yup.string('').required('pridaj hlavny chod'),
    main2: Yup.string('').required('pridaj druhy hlavny chod'),
    desert: Yup.string('').required('pridaj dezert'),
    dinner: Yup.string('').required('pridaj večeru'),
    drinksNonAlco: Yup.string(''),
    drinksAlco: Yup.string(''),
    others: Yup.string(''),
  });

  const onSubmit = async (values) => {
    console.log(values);
    if (isLastStep()) {
      const res = await db.collection('veselka').add(values);
      history.push(`/preview/${res.id}`);
    } else {
      setStep((s) => s + 1);
    }
  };
  const formikPages = [FormStep1, FormStep2, FormStep3];

  const formikPagesWithProps = (props) =>
    formikPages.map((FormikStep) => <FormikStep {...props} />);

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
          {
            formikPagesWithProps({
              values,
              handleChange,
            })[step]
          }
          {step > 0 && (
            <Button onClick={() => setStep((s) => s - 1)} text="zpet" />
          )}
          <Button
            onClick={() => handleSubmit()}
            text={isLastStep() ? 'uložiť' : 'ďalej'}
          />
        </>
      )}
    </Formik>
  );
};
