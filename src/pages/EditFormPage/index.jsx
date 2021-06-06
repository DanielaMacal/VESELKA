import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { CreateForm } from '../../components/CreateForm';
import { db } from '../../db';

export const EditFormPage = () => {
  const [state, setState] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    db.collection('veselka')
      .doc(id)
      .onSnapshot((snapshot) => {
        try {
          const data = snapshot.data();
          data.id = snapshot.id;
          setState(data);
          setError(false);
        } catch (err) {
          setError(true);
        } finally {
          setLoading(false);
        }
      });
  }, []);

  if (loading) {
    return <div className="spinner">Načítám se</div>;
  }
  if (error) {
    return <div>Něco se pokazilo</div>;
  }

  return (
    <>
      <CreateForm initialValues={state} />
    </>
  );
};
