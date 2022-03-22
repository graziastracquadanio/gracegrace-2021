import React, { Suspense } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AppRouter } from './AppRouter';
import { Icon } from 'components/Icon';
import { LoadingIndicator } from 'components/LoadingIndicator';
import { Navigation } from 'components/Navigation';
import { BREAKPOINTS } from 'constants/css-variables';

export const AppContent = () => {
  return (
    <div>
      <LoadingIndicator />
      <LayoutContainer>
        <ContentLimiterContainer>
          <Navigation />
          <Suspense fallback={<LoadingIndicator />}>
            <AppRouter />
          </Suspense>
        </ContentLimiterContainer>
        <Footer>
          This website has been made with{' '}
          <HeartButton to="/styleguide">
            <Heart icon="heart" />
          </HeartButton>{' '}
          a lot of it!
        </Footer>
      </LayoutContainer>
    </div>
  );
};

const LayoutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-background);
  transition: background var(--theme-transition);
  padding: 0 1.5em;

  @media (min-width: ${BREAKPOINTS.medium}) {
    padding: 0 3em;
  }
`;

const ContentLimiterContainer = styled.div`
  width: 100%;
  max-width: var(--layout-content-max-width);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding-bottom: 4em;
`;

const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25em;
  font-size: small;
`;

const HeartButton = styled(Link)`
  position: relative;
  margin: 0 0.3rem;
`;

const Heart = styled(Icon)`
  height: 1.3rem;
  fill: var(--color-primary);
  transition: all 0.2s ease-out;

  &:hover {
    transform: scale(1.3);
  }
`;
