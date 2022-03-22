import React, { useState } from 'react';

import { css } from 'styled-components';

import { Section } from './Section';
import { MarkdownEditor } from 'components/form';
import { IngredientsListCss } from 'components/recipe';

const preview = `#### Peanut butter vibes

###### You will need:
- dates
- peanut butter
- a knife

###### Instructions
- Cut the date
- Remove the pit
- Put peanut butter inside
- Eat and touch heaven!
`;

export const MarkdownSection = () => {
  const [value, setValue] = useState(preview);
  return (
    <Section title="Markdown tester">
      <MarkdownEditor
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        customCSS={MarkdownEditoCss}
      />
    </Section>
  );
};

const MarkdownEditoCss = css`
  ${IngredientsListCss}

  h1, h2, h3, h4, h5 {
    margin-bottom: 1rem;
  }
`;
