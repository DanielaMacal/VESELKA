import React from 'react';
import { LPHeader } from '../../components/LPHeader';
import { LPFooter } from '../../components/LPFooter';
import { LPIntroduction } from '../../components/LPIntroduction';
import { LPEntice } from '../../components/LPEntice';
import { LPEnticeTwo } from '../../components/LPEnticeTwo';
import { LPReference } from '../../components/LPReference';
import { LPLastCall } from '../../components/LPLastCall';
import '../../style.css';

export const LandingPage = () => {
  return (
    <div className="landingPage">
      <LPHeader />
      <LPIntroduction />
      <LPEntice />
      <LPEnticeTwo />
      <LPReference />
      <LPLastCall />
      <LPFooter />
    </div>
  );
};
