import React from 'react';
import { useHistory, useParams } from 'react-router';
import { Button } from '../../components/button';
import './style.css';

export const FinalPage = () => {
  const history = useHistory();
  const { id } = useParams();

  return (
    <div className="finalPage">
      <h2>Vaše stránka byla vytvořena!</h2>
      <p>
        Tento odkaz odešlete svým hostům:{' '}
        <a
          href={`https://main--gifted-nightingale-e3538a.netlify.app/preview/${id}`}
        >
          Svatební web
        </a>
      </p>
      <p>
        Toto je Vaše ID, uschovejte jej pro případ editace vaší stránky: {id}
      </p>

      <Button
        className=""
        text="zobraziť stránku"
        onClick={() => history.push(`/preview/${id}`)}
      />
    </div>
  );
};
