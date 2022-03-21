import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import { AppContent } from './AppContent';
import { GlobalStyle } from 'components/GlobalStyle';
import { RootStoreProvider } from 'providers/RootStoreProvider';
import { ThemeProvider } from 'providers/ThemeProvider';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
        <RootStoreProvider>
          <Router>
            <AppContent />
          </Router>
        </RootStoreProvider>
      </ThemeProvider>
    </>
  );
};
