import React, { useRef, useState } from 'react';
import { adjustHue, darken, mix } from 'polished';

import styled from 'styled-components';

import { IcecreamStyle } from './IcecreamStyle';
import { useOnScreen } from 'hooks/useOnScreen';

const icecreamColors = [
  '#EF9A9A',
  '#F48FB1',
  '#CE93D8',
  '#B39DDB',
  '#9FA8DA',
  '#90CAF9',
  '#81D4FA',
  '#80DEEA',
  '#80CBC4',
  '#81C784',
  '#AED581',
  '#DCE775',
  '#FFEE58',
  '#FFD54F',
  '#FF8A65',
];

export const giveMeARandomColor = (): string => {
  return icecreamColors[Math.floor(Math.random() * icecreamColors.length)];
};

export const Icecream = () => {
  const [color, setColor] = useState<string>(giveMeARandomColor());
  const ref: any = useRef<HTMLDivElement>();
  const onScreen = useOnScreen<HTMLDivElement>(ref);

  const handleClick = () => {
    setColor(giveMeARandomColor());
  };

  return (
    <div ref={ref}>
      <StyledContainer color={color} isVisible={onScreen} onClick={handleClick}>
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
              <div className="icecream-face-mouth">
                <div className="icecream-face-mouth_inner">
                  <div className="icecream-face-mouth_tongue" />
                </div>
              </div>
            </div>
            <div className="icecream-drops">
              <div className="icecream-drops-second">
                <div className="icecream-drops-falling_drop second" />
              </div>
              <div className="icecream-drops-first_space">
                <div className="icecream-drops-first_space_end" />
              </div>
              <div className="icecream-drops-first">
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
    </div>
  );
};

const StyledContainer = styled.div<{ color: string; isVisible: boolean }>`
  ${(props) =>
    props.color &&
    `
      --icecream-color: ${props.color};
      --icecream-darker-color: ${darken(0.2, props.color)};
      --icecream-face-color: ${mix(0.5, props.color, '#37474F')};
      --icecream-tongue-color: ${darken(0.05, adjustHue(10, props.color))};
      `}

  --icecream-animation-play-state: ${(props) => (props.isVisible ? 'running' : 'paused')};
  /* --icecream-animation-play-state: paused; */

  --icecream-stick-color: #f8d4ac;
  --icecream-background-color: white;

  display: flex;
  justify-content: center;
  padding: 2rem;
  background-color: var(--icecream-background-color);
  cursor: pointer;
  transition: filter 0.5s ease-in;

  ${IcecreamStyle};
`;
