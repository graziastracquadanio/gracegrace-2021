import { createGlobalStyle } from 'styled-components';

import ResetStyle from './ResetStyle';
import TypographyStyle from './TypographyStyle';
import { FONTS, LAYOUT, THEME } from 'constants/css-variables';

export const GlobalStyle = createGlobalStyle`
  // variables (except colors which are dynamically updated in the ThemeContext)
  :root {
    // EXTRA COLORS
    --color-danger: #B00020;

    // FONTS
    --font-primary: ${FONTS.primary};
    --font-secondary: ${FONTS.secondary};
    --font-base-font-size: ${FONTS.baseFontSize};
    --font-base-font-size-l: ${FONTS.baseFontSizeL};
    --font-weight-primary: ${FONTS.weightPrimary};
    --font-weight-primary-bold: ${FONTS.weightPrimaryBold};
    --font-weight-secondary: ${FONTS.weightSecondary};
    --font-weight-secondary-bold: ${FONTS.weightSecondaryBold};

    // ICONS
    --color-icon: var(--color-text);
    --color-icon-active: var(--color-primary);

    // LAYOUT
    --layout-content-max-width: ${LAYOUT.contentMaxWidth};

    // THEME
    --theme-transition: ${THEME.transition};
  }

  ${ResetStyle}
  ${TypographyStyle}

  body {
    border: 8px solid var(--color-primary);
  }

  ::-moz-selection {
    background: var(--color-highlight);
  }

  ::selection {
    background: var(--color-highlight);
  }

  ::placeholder {
    color: var(--color-gray);
    font-weight: var(--font-weight-secondary);
  }
`;
