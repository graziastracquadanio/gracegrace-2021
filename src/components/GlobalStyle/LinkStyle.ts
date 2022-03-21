import { css } from 'styled-components';

export const LinkStyle = css`
  padding-left: 0.15rem;
  padding-right: 0.15rem;
  color: var(--color-primary);
  -webkit-tap-highlight-color: transparent;
  font-weight: var(--font-weight-secondary-bold);

  &:hover {
    color: var(--color-background);
    background-color: var(--color-primary);
    transition: all 0.1s linear 0.05s;
  }
`;
