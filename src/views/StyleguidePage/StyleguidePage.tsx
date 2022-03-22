import React from 'react';
import styled from 'styled-components';

import { ButtonsSection } from './ButtonsSection';
import { ColorsSection } from './ColorsSection';
import { MarkdownSection } from './MarkdownSection';
import { TypographySection } from './TypographySection';

export const StyleguidePage = () => (
  <LayoutContainer>
    <h6>This is a place where I play and test the style and have fun.</h6>
    <ColorsSection />
    <TypographySection />
    <MarkdownSection />
    <ButtonsSection />
  </LayoutContainer>
);

const LayoutContainer = styled.div`
  display: grid;
  grid-gap: 1em;
`;
