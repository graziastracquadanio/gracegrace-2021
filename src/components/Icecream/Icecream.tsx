import React from 'react';

import styled from 'styled-components';

import { IcecreamStyle } from './IcecreamStyle';

export const Icecream = () => (
  <StyledContainer>
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

const StyledContainer = styled.div`
  /* TODO animate this colors :) */
  --icecream-color: #ffa5a5;
  --icecream-darker-color: #eb918e;
  --icecream-tongue-color: #f9bcbb;
  --icecream-stick-color: #f8d4ac;
  --icecream-background-color: white;

  display: flex;
  justify-content: center;
  padding: 3rem;
  background-color: var(--icecream-background-color);

  ${IcecreamStyle};
`;
