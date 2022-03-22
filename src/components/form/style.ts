import { css } from 'styled-components';

export const CommonFormControlStyle = css<{ hasError?: boolean }>`
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-${(props) => (props.hasError ? 'danger' : 'gray')});
  border-radius: 0;
  outline: none;
  width: 100%;
  font-family: var(--fonts-secondary);
  font-weight: var(--font-weight-secondary);
  font-size: 1rem;
  color: var(--color-text);
  line-height: 1.5;
  background-color: var(--color-background-light);
  transition: all var(--theme-transition);

  &:focus {
    border-color: var(--color-primary);
  }
`;
