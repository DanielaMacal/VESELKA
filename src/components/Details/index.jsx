import React from 'react';
import './style.css';

export const Details = (props) => {
  return (
    <>
      <h2>Detaily</h2>
      <div>
        <h3 className="ourWeddingDetails">Naše svatba</h3>
        <ul>
          <li>{props.date}</li>
          <li>{props.weddingPlace}</li>
          <li>{props.celebrationPlace}</li>
        </ul>
        <h3 className="placeWeddingDetails">Místo svatby</h3>
        <p>{props.weddingPlace}</p>
        <h3 className="celebrationWeddingDetails">Místo oslav</h3>
        <p>{props.celebrationPlace}</p>
        <h3 className="celebrationWeddingDetails">Program naší svatby</h3>
        <ul>
          <li>
            {props.timeFrom1} - {props.timeTo1}: {props.program1}
          </li>
          <li>
            {props.timeFrom2} - {props.timeTo2}: {props.program2}
          </li>
          <li>
            {props.timeFrom3} - {props.timeTo3}: {props.program3}
          </li>
          <li>
            {props.timeFrom4} - {props.timeTo4}: {props.program4}
          </li>
          <li>
            {props.timeFrom5} - {props.timeTo5}: {props.program5}
          </li>
          <li>
            {props.timeFrom6} - {props.timeTo6}: {props.program6}
          </li>
          <li>
            {props.timeFrom7} - {props.timeTo7}: {props.program7}
          </li>
          <li>
            {props.timeFrom8} - {props.timeTo8}: {props.program8}
          </li>
          <li>
            {props.timeFrom9} - {props.timeTo9}: {props.program9}
          </li>
          <li>
            {props.timeFrom10} - {props.timeTo10}: {props.program10}
          </li>
        </ul>
      </div>
    </>
  );
};
