import React from 'react';
import './style.css';

export const WeddingAnnouncement = (props) => {
  return (
    <img
      className="weddingAnnouncementPicture"
      src={props.weddingAnnouncementPicture}
    />
  );
};
