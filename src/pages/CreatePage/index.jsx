import React, { useState } from 'react';
import { Formik } from 'formik';
import { FormStep1 } from '../../components/formSteps/formStep1';
import { FormStep2 } from '../../components/formSteps/formStep2';
import { FormStep3 } from '../../components/formSteps/formStep3';
import { FormStep4 } from '../../components/formSteps/FormStep4';
import { FormStep5 } from '../../components/formSteps/FormStep5';
import { db } from '../../db';
import { useHistory, useParams } from 'react-router-dom';
import { Button } from '../../components/button';

import { schema1, schema2, schema3 } from '../../components/validationSchema';

export const CreatePage = () => {
  const history = useHistory();
  const { id } = useParams();

  const [step, setStep] = useState(0);
  const validations = [schema1, schema2, schema3];

  const onSubmit = async (values) => {
    console.log(values);
    if (isLastStep()) {
      const res = await db.collection('veselka').add(values);
      history.push(`/final/${res.id}`);
    } else {
      setStep((s) => s + 1);
    }
  };
  const formikPages = [FormStep1, FormStep2, FormStep3, FormStep4, FormStep5];

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
        bride: '',
        brideAbout: '',
        bridePicture: null,
        groom: '',
        groomAbout: '',
        groomPicture: '',
        weddingAnnouncementPicture: null,
      }}
      onSubmit={onSubmit}
      validationSchema={validations[step]}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        setFieldValue,
        /* and other goodies */
      }) => (
        <>
          {
            formikPagesWithProps({
              errors,
              values,
              handleChange,
              setFieldValue,
            })[step]
          }
          {step > 0 && (
            <Button onClick={() => setStep((s) => s - 1)} text="zpet" />
          )}
          <Button
            onClick={() => handleSubmit()}
            text={isLastStep() ? 'uložiť' : 'ďalej'}
            type="submit"
          />
        </>
      )}
    </Formik>
  );
};
