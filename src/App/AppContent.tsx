import React, { Suspense } from 'react';

import { AppRouter } from './AppRouter';

export const AppContent = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <AppRouter />
      </Suspense>
    </div>
  );
};
