import React, { useState } from 'react';
import { Formik } from 'formik';
import { FormStep1 } from '../../components/formSteps/formStep1';
import { FormStep2 } from '../../components/formSteps/formStep2';
import { FormStep3 } from '../../components/formSteps/formStep3';
import { FormStep4 } from '../../components/formSteps/FormStep4';
import { FormStep5 } from '../../components/formSteps/FormStep5';
import { db, storage } from '../../db';
import { useHistory } from 'react-router-dom';
import { Button } from '../../components/button';
import * as yup from 'yup';
import { schema1, schema2, schema3 } from '../../components/validationSchema';

export const CreatePage = () => {
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
          .then((res) => history.push(`/preview/${res.id}`));
      });
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
      // validationSchema={validations[step]}
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
