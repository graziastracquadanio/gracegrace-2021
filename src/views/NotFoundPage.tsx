import React from 'react';

import { useLocation } from 'react-router-dom';
import { Icecream } from 'components/Icecream';

interface NotFoundPageState {
  message?: string;
}

const NotFoundPage = () => {
  const location = useLocation();
  const state = (location.state ?? {}) as NotFoundPageState;

  return (
    <>
      <h3>{state?.message || 'Page not found'}</h3>
      <Icecream />
    </>
  );
};

export default NotFoundPage;
