import React from 'react';

import styled from 'styled-components';

interface Props {
  label: string;
  htmlFor: string;
  error?: string;
}

export const FormControl = ({ label, htmlFor, error, children }: React.PropsWithChildren<Props>) => (
  <Container>
    <Label htmlFor={htmlFor}>{label}</Label>
    {children}
    {error && (
      <Error>
        <small>{error}</small>
      </Error>
    )}
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Label = styled.label`
  font-family: var(--font-primary);
  font-weight: var(--font-weight-primary);
  font-size: 1.2rem;
`;

const Error = styled.p`
  position: absolute;
  /* top: calc(100% - 1.5rem); */
  top: 100%;
  color: var(--color-danger);
`;
