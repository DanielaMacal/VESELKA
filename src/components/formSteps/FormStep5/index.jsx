import React from 'react';
import { Input } from '../../Inputs';
import './style.css';

export const FormStep5 = ({ setFieldValue }) => {
  return (
    <div className="formStep5">
      <h2>Sem přidej svatební oznámení</h2>
      <div className="container5">
        <Input
          className="input2"
          type="file"
          name="weddingAnnouncementPicture"
          label="Svatební oznámení"
          value={undefined}
          accept=".jpg"
          onChange={(event) => {
            setFieldValue('weddingAnnouncementPicture', event.target.files[0]);
          }}
        />
      </div>
    </div>
  );
};
