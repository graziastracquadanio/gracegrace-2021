import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationItemLink = styled(NavLink)`
  --navigation-link-transition: 0.2s linear 0.15s;
  --navigation-link-color: var(--color-text);
  --navigation-link-color-active: var(--color-primary);

  position: relative;
  font-family: var(--font-primary);
  font-weight: var(--font-weight-primary);
  font-size: 1rem;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  user-select: none;
  padding: 0.5rem 0.2rem;
  color: var(--navigation-link-color);

  &:hover,
  &.active {
    color: var(--navigation-link-color-active);
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
    transform-origin: 50% 50%;
    transform: scaleX(0);
    transition: color var(--theme-transition), background var(--theme-transition),
      transform var(--navigation-link-transition);
    background-color: var(--navigation-link-color);
  }

  &:hover:after,
  &.active:after {
    transform: scaleX(1);
    background-color: var(--navigation-link-color-active);
  }
`;
