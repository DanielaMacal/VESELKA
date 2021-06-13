import React from 'react';
import { useHistory } from 'react-router';
import { Formik } from 'formik';

import { LPHeader } from '../../components/LPHeader';
import { Button } from '../../components/button';
import { Input } from '../../components/Inputs';

import './style.css';

export const EditPage = () => {
  const history = useHistory();

  return (
    <>
      <LPHeader />
      <div className="editPage">
        <h2>Tvá VESELKA</h2>
        <div className="containerEditpage">
          <Formik
            initialValues={{ weddingId: '', password: '' }}
            onSubmit={(values) => {
              history.push(`/edit/${values.weddingId}`);
            }}
          >
            {({ values, errors, handleChange, handleSubmit }) => (
              <>
                <Input
                  className="input"
                  type="text"
                  name="weddingId"
                  placeholder="Id svatby"
                  value={values.weddingId}
                  onChange={handleChange('weddingId')}
                  error={errors.weddingId}
                />

                <Input
                  className="input"
                  type="password"
                  name="password"
                  placeholder="heslo"
                  value={values.password}
                  onChange={handleChange('password')}
                  error={errors.password}
                />

                <Button
                  onClick={() => handleSubmit()}
                  text="Editovat"
                  type="submit"
                />
              </>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};
