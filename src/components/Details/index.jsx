import React from 'react';
import { WeddingAnnouncement } from '../WeddingAnnouncement';
import './style.css';

export const Details = (props) => {
  return (
    <div
      className="details"
      style={{ backgroundColor: props.weddingAnnouncementPicture }}
    >
      <h2 className="detailsH2">Detaily</h2>
      <div className="weddingInfo">
        <h3 className="ourWeddingDetails">Datum naší svatby</h3>
        <p>{props.date}</p>
        <h3 className="placeWeddingDetails">Místo naší svatby</h3>
        <p>{props.weddingPlace}</p>
        <h3 className="celebrationWeddingDetailsPlace">Místo oslav</h3>
        <p>{props.celebrationPlace}</p>
      </div>
      <div className="program">
        <h3 className="celebrationWeddingDetails">Program naší svatby</h3>
        <div className="weddingProgramDet">
          {props.timeFrom1 && (
            <h3>
              {props.timeFrom1} - {props.timeTo1}
            </h3>
          )}
          {props.program1 && <p>{props.program1}</p>}
          {props.timeFrom2 && (
            <h3>
              {props.timeFrom2} - {props.timeTo2}
            </h3>
          )}
          {props.program2 && <p> {props.program2}</p>}
          {props.timeFrom3 && (
            <h3>
              {props.timeFrom3} - {props.timeTo3}
            </h3>
          )}
          {props.program3 && <p> {props.program3}</p>}

          {props.timeFrom4 && (
            <h3>
              {props.timeFrom4} - {props.timeTo4}
            </h3>
          )}
          {props.program4 && <p> {props.program4}</p>}

          {props.timeFrom5 && (
            <h3>
              {props.timeFrom5} - {props.timeTo5}
            </h3>
          )}
          {props.program5 && <p> {props.program5}</p>}

          {props.timeFrom6 && (
            <h3>
              {props.timeFrom6} - {props.timeTo6}
            </h3>
          )}
          {props.program6 && <p> {props.program6}</p>}

          {props.timeFrom7 && (
            <h3>
              {props.timeFrom7} - {props.timeTo7}
            </h3>
          )}
          {props.program7 && <p> {props.program7}</p>}

          {props.timeFrom8 && (
            <h3>
              {props.timeFrom8} - {props.timeTo8}
            </h3>
          )}
          {props.program8 && <p> {props.program8}</p>}

          {props.timeFrom9 && (
            <h3>
              {props.timeFrom9} - {props.timeTo9}
            </h3>
          )}
          {props.program9 && <p> {props.program9}</p>}

          {props.timeFrom10 && (
            <h3>
              {props.timeFrom10} - {props.timeTo10}
            </h3>
          )}
          {props.program10 && <p> {props.program10}</p>}
        </div>
      </div>
    </div>
  );
};
