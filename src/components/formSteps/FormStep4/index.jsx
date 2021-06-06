import React from 'react';
import { Input } from '../../Inputs';

export const FormStep4 = ({ values, handleChange, setFieldValue }) => {
  return (
    <div className="formStep4">
      <div className="newlyweds">
        <h1>Sem přidej informace o novomanželích</h1>
        <div>
          <p>Nevěsta</p>
          <Input
            className=""
            type="text"
            name="bride"
            label="jméno nevěsty"
            value={values.bride}
            onChange={handleChange('bride')}
          />
          <Input
            className=""
            type="text"
            name="brideAbout"
            label="o nevěstě"
            value={values.brideAbout}
            onChange={handleChange('brideAbout')}
          />
          <Input
            className=""
            type="file"
            name="bridePicture"
            label="foto nevěsty"
            value={undefined}
            accept=".jpg"
            onChange={(event) => {
              setFieldValue('bridePicture', event.currentTarget.files[0]);
            }}
          />
        </div>
        <div>
          <p>Ženich</p>
          <Input
            className=""
            type="text"
            name="groom"
            label="jméno nevěsty"
            value={values.groom}
            onChange={handleChange('groom')}
          />
          <Input
            className=""
            type="text"
            name="groomAbout"
            label="o ženichovi"
            value={values.groomAbout}
            onChange={handleChange('groomAbout')}
          />
          <Input
            className=""
            type="file"
            name="groomPicture"
            label="foto ženicha"
            value={undefined}
            accept=".jpg"
            onChange={(event) => {
              setFieldValue('groomPicture', event.currentTarget.files[0]);
            }}
          />
        </div>
      </div>
    </div>
  );
};
