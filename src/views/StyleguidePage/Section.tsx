import React from 'react';

import styled from 'styled-components';

interface Props {
  title?: string;
}

export const Section = ({ title, children }: React.PropsWithChildren<Props>) => (
  <Container>
    {title && <Title>{title}</Title>}
    {children}
  </Container>
);

const Container = styled.section`
  background-color: var(--color-background-light);
  transition: background var(--theme-transition);
  padding: 1em;
`;

const Title = styled.h3`
  color: var(--color-primary);
  border-bottom: 2px solid var(--color-primary);
  margin-bottom: 0.5em;
  transition: all var(--theme-transition);
`;
