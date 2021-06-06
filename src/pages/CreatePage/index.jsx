import React from 'react';

import { CreateForm } from '../../components/CreateForm';

export const CreatePage = () => {
  return (
    <CreateForm
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
        groomPicture: null,
        weddingAnnouncementPicture: null,
      }}
    />
  );
};
