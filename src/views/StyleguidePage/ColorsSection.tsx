import React, { useMemo } from 'react';

import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import { Section } from './Section';
import { BREAKPOINTS, COLORS, PALETTE } from 'constants/css-variables';
import { useRootStore } from 'providers/RootStoreProvider';
import { useThemeContext } from 'providers/ThemeProvider';
import { copyToClipboard } from 'utils/others';

export const ColorsSection = observer(function ColorsSection() {
  const { colorMode } = useThemeContext();
  const {
    uiStore: { addNotification },
  } = useRootStore();

  const colors = useMemo(
    () => (colorSet: any) => {
      const onCopy = (value: string) => {
        addNotification(`${value} copied to clipboard`);
      };

      return Object.keys(colorSet).map((color) => (
        <ColorItem key={`color-${color}`} onClick={() => copyToClipboard(`var(--color-${color})`, onCopy)}>
          <ColorItemBackground color={color} />
          <ColorItemsText>
            <small>{color}</small>
            {colorMode && <small>{colorSet[color][colorMode]}</small>}
          </ColorItemsText>
        </ColorItem>
      ));
    },
    [colorMode, addNotification],
  );

  return (
    <Section title="Colors">
      <p>
        Use <code>var(--color-name)</code> as CSS variable. Updated automatically on switching theme.
      </p>
      <Subsection>
        <h5>Palette</h5>
        <p>
          Where possible avoid using directly the palette. Prefer the use cases or adjust the color using the theme
          context.
        </p>
        <ColorsList>{colors(PALETTE)}</ColorsList>
      </Subsection>
      <Subsection>
        <h5>Uses</h5>
        <ColorsList>{colors(COLORS)}</ColorsList>
      </Subsection>
    </Section>
  );
});

const Subsection = styled.div`
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ColorsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  column-gap: 1em;
  row-gap: 0.5em;

  @media (min-width: ${BREAKPOINTS.medium}) {
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 1em;
  }

  @media (min-width: ${BREAKPOINTS.large}) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;

const ColorItem = styled.li`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const ColorItemBackground = styled.div`
  width: 100%;
  height: 2rem;
  background-color: var(${(props) => `--color-${props.color}`});
  transition: background var(--theme-transition);

  @media (min-width: ${BREAKPOINTS.large}) {
    height: 4rem;
  }
`;

const ColorItemsText = styled.p`
  display: flex;
  flex-direction: column;
`;
