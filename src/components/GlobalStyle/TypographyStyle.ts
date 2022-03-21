import { css } from 'styled-components';

import { LinkStyle } from './LinkStyle';
import { BREAKPOINTS, HEADINGS } from 'constants/css-variables';

const sizes = {
  ...HEADINGS,
  p: 1,
};

const TypographyStyle = css`
  body {
    font-size: var(--font-base-font-size);
    font-weight: var(--font-weight-secondary);
    line-height: 1.3;
    color: var(--color-text);

    @media (min-width: ${BREAKPOINTS.large}) {
      font-size: var(--font-base-font-size-l);
    }
  }

  // prettier-ignore
  h1, h2, h3, h4, h5, h6, p {
    a {
      ${LinkStyle}
    }
  }

  p {
    font-family: var(--fonts-secondary);
    font-weight: var(--font-weight-secondary);
    font-size: ${sizes.p}em;
    color: inherit;
    transition: color var(--theme-transition);
    line-height: 1.5;
    margin: 0;
    margin-bottom: 0.5em;

    &:last-child {
      margin-bottom: 0;
    }
  }

  // prettier-ignore
  h1, h2, h3, h4, h5, h6 {
    display: block;
    margin: 0;
    font-family: var(--font-primary);
    font-weight: var(--font-weight-primary);
    line-height: 1.2;
    transition: color var(--theme-transition);
    margin-bottom: 0.5rem;
  }

  h1 {
    font-size: ${sizes.h1}em;
  }

  h2 {
    font-size: ${sizes.h2}em;
  }

  h3 {
    font-size: ${sizes.h3}em;
  }

  h4 {
    font-size: ${sizes.h4}em;
  }

  h5 {
    font-size: ${sizes.h5}em;
  }

  h6 {
    font-size: ${sizes.h6}em;
  }

  b,
  strong {
    font-weight: var(--font-weight-secondary-bold); // Add the correct font weight in Chrome, Edge, and Safari
  }

  mark {
    color: inherit;
    font-weight: var(--font-weight-secondary-bold);
    background-color: var(--color-highlight);
    transition: background var(--theme-transition);
    padding-left: 0.2rem;
    padding-right: 0.2rem;
  }

  code {
    padding: 0.1rem 0.25em;
    border-radius: 3px;
    background-color: var(--color-highlight);
    color: var(--color-text);
    transition: background var(--theme-transition);
  }
`;

export default TypographyStyle;
