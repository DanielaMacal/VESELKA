import React from 'react';
import './style.css';

export const WeddingAnnouncement = (props) => {
  return (
    <div className="weddingAnnouncement">
      <img
        className="weddingAnnouncementPicture"
        src={props.weddingAnnouncementPicture}
      />
    </div>
  );
};
