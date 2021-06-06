import React from 'react';
import { Input } from '../../Inputs';

export const FormStep5 = ({ setFieldValue }) => {
  return (
    <div className="formStep5">
      <div className="weddingAnnouncement">
        <h1>Sem přidej svatební oznámení</h1>
        <Input
          className=""
          type="file"
          name="weddingAnnouncementPicture"
          label="svatební oznámení"
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
