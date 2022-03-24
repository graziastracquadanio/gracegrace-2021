import React from 'react';

import { motion } from 'framer-motion';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import { LogoutButton } from './LogoutButton';
import { NavigationItemLink } from './NavigationItemLink';
import { ThemeToggle } from './ThemeToggle';
import { BREAKPOINTS, ZINDEX } from 'constants/css-variables';
import { useRootStore } from 'providers/RootStoreProvider';

export const Navigation = observer(function Navigation() {
  const { authStore } = useRootStore();

  return (
    <NavigationContainer>
      <NavigationList
        initial={{ translateY: '-200%' }}
        animate={{ translateY: 0 }}
        transition={{
          ease: 'easeOut',
          duration: 0.3,
          delay: 1,
        }}
      >
        <NavigationSection>
          <NavigationItemLink to="/about">About</NavigationItemLink>
          <NavigationItemLink to="/recipes">Recipes</NavigationItemLink>
          <NavigationItemLink to="/styleguide">Styleguide</NavigationItemLink>
          <NavigationItemLink to="/contact">Contact</NavigationItemLink>
        </NavigationSection>

        <NavigationSection wrap="no-wrap">
          {authStore.isLoggedIn && <StyledLogoutButton onClick={authStore.logout} />}
          <StyledThemeToggle />
        </NavigationSection>
      </NavigationList>
    </NavigationContainer>
  );
});

const NavigationContainer = styled.nav`
  width: 100%;
  padding: 0.75em 0 1rem;
  margin-top: 8px;
  display: flex;
  justify-content: center;
  z-index: ${ZINDEX.navigationMenu};
  overflow: hidden;
  position: relative;
  top: 0;

  @media (min-width: ${BREAKPOINTS.medium}) {
    position: sticky;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-background);
    transition: background var(--theme-transition);
    opacity: 0.8;
    z-index: -1;
  }
`;

const NavigationList = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
  align-items: flex-start;

  @media (min-width: ${BREAKPOINTS.medium}) {
    align-items: center;
  }
`;

const NavigationSection = styled.div<{ wrap?: 'wrap' | 'no-wrap' }>`
  display: flex;
  flex-wrap: ${(props) => props.wrap || 'wrap'};
  gap: 0 0.5em;

  @media (min-width: ${BREAKPOINTS.medium}) {
    gap: 1em;
  }
`;

const StyledLogoutButton = styled(LogoutButton)`
  height: 2rem;
`;

const StyledThemeToggle = styled(ThemeToggle)`
  height: 2rem;
  width: 2rem;
`;
