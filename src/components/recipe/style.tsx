import { css } from 'styled-components';

export const IngredientsListCss = css`
  li {
    font-family: var(--font-primary);
    padding: 0.5em 0;
    border-bottom: 1px dashed var(--color-gray);

    &:last-child {
      border-bottom: none;
    }
  }

  strong {
    font-weight: var(--font-weight-primary-bold);
  }

  ul + h6 {
    margin-top: 2rem;
  }
`;
