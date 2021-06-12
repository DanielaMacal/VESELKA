import React from 'react';
import { Details } from '../Details';
import { Food } from '../Food';
import { SheHeSays } from '../SheHeSays';
import { WeddingAnnouncement } from '../WeddingAnnouncement';
import { PrevFooter } from '../PrevFooter';
import './style.css';

export const Preview = (props) => {
  return (
    <>
      <WeddingAnnouncement {...props} />
      <SheHeSays {...props} />
      <Details {...props} />
      <Food {...props} />
      <PrevFooter />
    </>
  );
};
