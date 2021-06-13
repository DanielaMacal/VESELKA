import React from 'react';
import { useHistory, useParams } from 'react-router';
import { Button } from '../../components/button';
import './style.css';

export const FinalPage = () => {
  const history = useHistory();
  const { id } = useParams();

  return (
    <div className="finalPage">
      <h2>Vaša stránka bola vytvorená!</h2>
      <p>
        Tento odkaz rozošlete svojim hosťom:{' '}
        <a
          href={`https://main--gifted-nightingale-e3538a.netlify.app/preview/${id}`}
        >
          svatebni web
        </a>
      </p>
      <p>
        Toto je Vaše ID, uchovajte ho pre prípad editácie Vašej stránky: {id}
      </p>

      <Button
        className=""
        text="zobraziť stránku"
        onClick={() => history.push(`/preview/${id}`)}
      />
    </div>
  );
};
