import React from 'react';
import styled from 'styled-components';

import { ButtonsSection } from './ButtonsSection';
import { ColorsSection } from './ColorsSection';
import { MarkdownSection } from './MarkdownSection';
import { Section } from './Section';
import { TypographySection } from './TypographySection';
import { Icecream } from 'components/Icecream';

export const StyleguidePage = () => (
  <LayoutContainer>
    <h6>This is a place where I play and test the style and have fun.</h6>
    <ColorsSection />
    <TypographySection />
    <MarkdownSection />
    <ButtonsSection />
    <Section title="Ice cream">
      <p>Pure HTML and CSS animated little ice cream. Click to change flavor or resize to see weird things.</p>
      <IceCreamContainer>
        <Icecream />
      </IceCreamContainer>
    </Section>
  </LayoutContainer>
);

const LayoutContainer = styled.div`
  display: grid;
  grid-gap: 1em;
`;

const IceCreamContainer = styled.div`
  border: 2px dashed var(--color-highlight);
  resize: horizontal;
  overflow: hidden;
`;
