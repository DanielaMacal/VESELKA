import React from 'react';
import { useHistory, useParams } from 'react-router';
import { Button } from '../../components/button';
import './style.css';

export const FinalPage = () => {
  const history = useHistory();
  const { id } = useParams();

  return (
    <div className="finalPage">
<<<<<<< HEAD
      <h2>Vaše stránka byla úspěšně vytvořená</h2>
      <p>
        Tento odkaz rozešlete svým hostům:{' '}
        <a
          href={`https://main--gifted-nightingale-e3538a.netlify.app/preview/${id}`}
        >
          Svatební web
        </a>
      </p>
      <p>Toto je Vaše ID, uchovejte ho pro editaci Vaší stránky: {id}</p>

      <Button
        className=""
        text="Zobrazit stránku"
        onClick={() => history.push(`/preview/${id}`)}
      />
=======
      <div className="nalepka">
        <h2>Vaše stránka byla vytvořena!</h2>
        <p>
          Tento odkaz rozešlete svým hostům:{' '}
          <a
            href={`https://main--gifted-nightingale-e3538a.netlify.app/preview/${id}`}
          >
            svatebni web
          </a>
        </p>
        <p>
          Toto je Vaše ID, uchovejte ho pro případ editace vaší stránky: {id}
        </p>

        <Button
          className=""
          text="zobraziť stránku"
          onClick={() => history.push(`/preview/${id}`)}
        />
      </div>
>>>>>>> origin/main
    </div>
  );
};
