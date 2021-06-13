import React from 'react';
import { useHistory, useParams } from 'react-router';
import { Button } from '../../components/button';
import './style.css';

export const FinalPage = () => {
  const history = useHistory();
  const { id } = useParams();

  return (
    <div className="finalPage">
      <h2 className="finalNazov">Vaše stránka byla vytvořena!</h2>
      <p className="final">
        Tento odkaz rozešlete svým hostům:{' '}
        <a
          href={`https://main--gifted-nightingale-e3538a.netlify.app/preview/${id}`}
        >
          svatebni web
        </a>
      </p>
      <p className="final">
        Toto je Vaše ID, uchovejte ho pro případ editace vaší stránky: {id}
      </p>

      <Button
        className=""
        text="zobraziť stránku"
        onClick={() => history.push(`/preview/${id}`)}
      />
    </div>
  );
};
