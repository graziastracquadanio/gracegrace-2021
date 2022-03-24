import React, { useState } from 'react';
import { adjustHue, darken, mix } from 'polished';

import styled from 'styled-components';

import { IcecreamStyle } from './IcecreamStyle';

const icecreamColors = [
  '#EF9A9A',
  '#F48FB1',
  '#CE93D8',
  '#B39DDB',
  '#9FA8DA',
  '#90CAF9',
  '#81D4FA',
  '#81D4FA',
  '#80CBC4',
  '#A5D6A7',
  '#C5E1A5',
  '#E6EE9C',
  '#FFF59D',
  '#FFE082',
  '#FFAB91',
];

export const giveMeARandomColor = (): string => {
  return icecreamColors[Math.floor(Math.random() * icecreamColors.length)];
};

export const Icecream = () => {
  const [color, setColor] = useState<string>(giveMeARandomColor());

  const handleClick = () => {
    setColor(giveMeARandomColor());
  };

  return (
    <StyledContainer color={color} onClick={handleClick}>
      <div className="icecream-container">
        <div className="icecream-body">
          <div className="icecream-body_top" />
          <div className="icecream-body_bottom" />
          <div className="icecream-bite_first" />
          <div className="icecream-bite_second" />
          <div className="icecream-body-shadow">
            <div className="icecream-body-shadow_item">
              <div className="icecream-body-shadow_item_top" />
              <div className="icecream-body-shadow_item_center" />
              <div className="icecream-body-shadow_item_bottom" />
            </div>
            <div className="icecream-body-shadow_item">
              <div className="icecream-body-shadow_item_top" />
              <div className="icecream-body-shadow_item_center" />
              <div className="icecream-body-shadow_item_bottom" />
            </div>
          </div>
          <div className="icecream-face">
            <div className="icecream-face-eyes">
              <div />
              <div />
            </div>
            <div className="icecream-face-mounth">
              <div className="icecream-face-mounth_inner">
                <div className="icecream-face-mounth_tongue" />
              </div>
            </div>
          </div>
          <div className="icecream-drops">
            <div className="icecream-drops-second">
              <div className="icecream-drops-second_end" />
              <div className="icecream-drops-falling_drop second" />
            </div>
            <div className="icecream-drops-first_space">
              <div className="icecream-drops-first_space_end" />
            </div>
            <div className="icecream-drops-first">
              <div className="icecream-drops-first_end" />
              <div className="icecream-drops-falling_drop first" />
            </div>
            <div className="icecream-drops-second_space">
              <div className="icecream-drops-second_space_end" />
            </div>
          </div>
        </div>
        <div className="icecream-stick">
          <div className="icecream-stick_shadow" />
        </div>
        <div className="icecream-spot" />
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled.div<{ color: string }>`
  ${(props) =>
    props.color &&
    `
      --icecream-color: ${props.color};
      --icecream-darker-color: ${darken(0.2, props.color)};
      --icecream-face-color: ${mix(0.5, props.color, '#37474F')};
      --icecream-tongue-color: ${darken(0.05, adjustHue(10, props.color))};
      `}

  --icecream-stick-color: #f8d4ac;
  --icecream-background-color: white;

  display: flex;
  justify-content: center;
  padding: 3rem;
  background-color: var(--icecream-background-color);
  cursor: pointer;

  ${IcecreamStyle};
`;
