import type { Color, Palette } from 'types/colors';

// to use the color variables in css use the prefix `--color` (i.e. `--color-primary`)
// the colors are based on the theme selected through the ThemeContext
// https://flatuicolors.com/palette/in
// https://coolors.co/
// https://mycolor.space/?hex=%23BF538D&sub=1

export const PALETTE: Record<Palette, Color> = {
  'primary-dark': {
    // light: '#00243e',
    light: '#8F71A0',
    dark: '#8F71A0',
  },
  primary: {
    // light: '#10c1a0',
    light: '#BF538D',
    dark: '#BF538D',
  },
  'primary-light': {
    // light: '#ceeb9f',
    light: '#D8BFD8',
    dark: '#D8BFD8',
  },
  // gray
  'gray-dark': {
    light: '#5a5c65',
    dark: '#5a5c65',
  },
  gray: {
    light: '#A9ABB2',
    dark: '#A9ABB2',
  },
  'gray-light': {
    light: '#E9EAEC',
    dark: '#E9EAEC',
  },
};

export const COLORS: Record<string, Color> = {
  text: {
    light: PALETTE['gray-dark'].light,
    dark: PALETTE['gray-light'].light,
  },
  'background-dark': {
    // light: PALETTE['gray-light'].light,
    light: 'rgba(0, 25, 25, 0.05)',
    dark: 'rgba(0, 25, 25, 0.4)',
  },
  background: {
    light: '#f4f1f1',
    dark: '#2A0647',
  },
  'background-light': {
    light: 'rgba(255, 250, 250, 0.6)',
    dark: 'rgba(255, 250, 250, 0.05)',
  },
  highlight: {
    light: PALETTE['primary-light'].light,
    dark: PALETTE['primary-dark'].dark,
  },
};

export const COLORS_ALL = { ...PALETTE, ...COLORS };

export const COLOR_MODE_KEY = 'color-mode';
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode';
