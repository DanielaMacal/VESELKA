import React from 'react';
import { Input } from '../../Inputs';
import './style.css';

export const FormStep4 = ({ values, handleChange, setFieldValue }) => {
  return (
    <div className="formStep4">
      <div className="container4">
        <h2 class="info4">Sem přidej informace o novomanželích</h2>

        <div className="rada">
          <div className="mladomanzelia">
            <Input
              className="input"
              type="text"
              name="bride"
              label="Jméno nevěsty"
              value={values.bride}
              onChange={handleChange('bride')}
            />
            <Input
              className="input"
              type="text"
              name="brideAbout"
              label="O nevěstě"
              value={values.brideAbout}
              onChange={handleChange('brideAbout')}
            />

            <Input
              className="input3"
              type="file"
              name="bridePicture"
              label="Foto nevěsty"
              value={undefined}
              accept=".jpg"
              onChange={(event) => {
                setFieldValue('bridePicture', event.currentTarget.files[0]);
              }}
            />
          </div>

          <div className="mladomanzelia">
            <Input
              className="input"
              type="text"
              name="groom"
              label="Jméno ženicha"
              value={values.groom}
              onChange={handleChange('groom')}
            />
            <Input
              className="input"
              type="text"
              name="groomAbout"
              label="O ženichovi"
              value={values.groomAbout}
              onChange={handleChange('groomAbout')}
            />

            <Input
              className="input3"
              type="file"
              name="groomPicture"
              label="Foto ženicha"
              value={undefined}
              accept=".jpg"
              onChange={(event) => {
                setFieldValue('groomPicture', event.currentTarget.files[0]);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
