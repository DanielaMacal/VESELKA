import React, { useState } from 'react';
import { Formik } from 'formik';
import { FormStep1 } from '../formSteps/formStep1';
import { FormStep2 } from '../formSteps/formStep2';
import { FormStep3 } from '../formSteps/formStep3';
import { FormStep4 } from '../formSteps/FormStep4';
import { FormStep5 } from '../formSteps/FormStep5';
import { db, storage } from '../../db';
import { useHistory } from 'react-router-dom';
import { Button } from '../button';

import { schema1, schema2, schema3 } from '../validationSchema';

export const CreateForm = (props) => {
  const history = useHistory();

  const [step, setStep] = useState(0);
  const validations = [schema1, schema2, schema3];

  const uploadImageToFirebase = (image, imagePropertyName) =>
    storage
      .ref(`/obrazky/${image.name}`)
      .put(image)
      .then((snapshot) => snapshot.ref.getDownloadURL())
      .then((uploadedImageUrl) => ({ uploadedImageUrl, imagePropertyName }));

  const onSubmit = async (values) => {
    console.log(values);

    if (isLastStep()) {
      if (typeof values.bridePicture === 'string') {
        db.collection('veselka')
          .add(values)
          .then((res) => history.push(`/final/${res.id}`));
      } else {
        Promise.all([
          uploadImageToFirebase(values.bridePicture, 'bridePicture'),
          uploadImageToFirebase(values.groomPicture, 'groomPicture'),
          uploadImageToFirebase(
            values.weddingAnnouncementPicture,
            'weddingAnnouncementPicture',
          ),
        ]).then((promiseValues) => {
          let storedValues = { ...values };

          promiseValues.forEach((promiseValue) => {
            storedValues = {
              ...storedValues,
              [promiseValue.imagePropertyName]: promiseValue.uploadedImageUrl,
            };
          });

          db.collection('veselka')
            .add(storedValues)
            .then((res) => history.push(`/final/${res.id}`));
        });
      }
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
      initialValues={props.initialValues}
      onSubmit={onSubmit}
      validationSchema={validations[step]}
    >
      {({ values, errors, handleChange, handleSubmit, setFieldValue }) => (
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
            <Button onClick={() => setStep((s) => s - 1)} text="Zpět" />
          )}
          <Button
            onClick={() => handleSubmit()}
            text={isLastStep() ? 'Uložit' : 'Pokračovat'}
            type="submit"
          />
        </>
      )}
    </Formik>
  );
};
