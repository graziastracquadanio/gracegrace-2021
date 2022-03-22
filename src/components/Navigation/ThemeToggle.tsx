import React, { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import { useThemeContext } from 'providers/ThemeProvider';

interface Properties {
  r: number;
  rotate: string;
  cx: number;
  cy: number;
  scale: number;
  delay: number;
}

export const propertiesByTheme: Record<string, Properties> = {
  dark: {
    r: 9,
    rotate: '40deg',
    cx: 12,
    cy: 4,
    scale: 0,
    delay: 0,
  },
  light: {
    r: 5,
    rotate: '90deg',
    cx: 30,
    cy: 0,
    scale: 1,
    delay: 0.04,
  },
};

const transition = {
  type: 'spring',
  duration: 0.75,
  stiffness: 50,
  mass: 1,
};

const sunPathTransition = {
  type: 'spring',
  duration: 1.5,
  bounce: 0.6,
  mass: 0.1,
  damping: 300,
};

export const ThemeToggle = () => {
  const { colorMode, setColorMode } = useThemeContext();
  const [properties, setProperties] = useState<Properties>(propertiesByTheme.light);

  const toggleColorMode = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    if (colorMode) {
      setProperties(propertiesByTheme[colorMode]);
    }
  }, [colorMode]);

  const { r, rotate, cx, cy, delay, scale } = properties;

  return (
    <ToggleButton onClick={toggleColorMode}>
      <StyledSvg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ rotate }}
        transition={transition}
        style={{ originX: '50%', originY: '50%' }}
      >
        <mask id="mask">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <motion.circle r="9" fill="black" animate={{ cx, cy }} transition={transition} />
        </mask>
        <SunCircle cx="12" cy="12" mask="url(#mask)" animate={{ r }} transition={transition} />
        <g>
          <SunLine
            x1="1"
            y1="12"
            x2="3"
            y2="12"
            animate={{ scale }}
            transition={{ ...sunPathTransition, delay: delay * 1 }}
          />
          <SunLine
            x1="4.22"
            y1="4.22"
            x2="5.64"
            y2="5.64"
            animate={{ scale }}
            transition={{ ...sunPathTransition, delay: delay * 2 }}
          />
          <SunLine
            x1="12"
            y1="1"
            x2="12"
            y2="3"
            animate={{ scale }}
            transition={{ ...sunPathTransition, delay: delay * 3 }}
          />
          <SunLine
            x1="18.36"
            y1="5.64"
            x2="19.78"
            y2="4.22"
            animate={{ scale }}
            transition={{ ...sunPathTransition, delay: delay * 4 }}
          />
          <SunLine
            x1="21"
            y1="12"
            x2="23"
            y2="12"
            animate={{ scale }}
            transition={{ ...sunPathTransition, delay: delay * 5 }}
          />
          <SunLine
            x1="18.36"
            y1="18.36"
            x2="19.78"
            y2="19.78"
            animate={{ scale }}
            transition={{ ...sunPathTransition, delay: delay * 6 }}
          />
          <SunLine
            x1="12"
            y1="21"
            x2="12"
            y2="23"
            animate={{ scale }}
            transition={{ ...sunPathTransition, delay: delay * 7 }}
          />
          <SunLine
            x1="4.22"
            y1="19.78"
            x2="5.64"
            y2="18.36"
            animate={{ scale }}
            transition={{ ...sunPathTransition, delay: delay * 8 }}
          />
        </g>
      </StyledSvg>
    </ToggleButton>
  );
};

const ToggleButton = styled.button`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
`;

const StyledSvg = styled(motion.svg)`
  height: 100%;
  width: auto;
`;

const SunCircle = styled(motion.circle)`
  fill: var(--color-text);

  svg:hover & {
    fill: var(--color-primary);
  }
`;

const SunLine = styled(motion.line)`
  transform-origin: center;
  stroke: var(--color-text);

  svg:hover & {
    stroke: var(--color-primary);
  }
`;
