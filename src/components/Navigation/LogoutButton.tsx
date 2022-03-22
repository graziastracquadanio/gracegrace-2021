import React, { HTMLAttributes } from 'react';

import { motion } from 'framer-motion';
import styled from 'styled-components';

const transition = {
  ease: 'easeOut',
  duration: 0.2,
  type: 'tween',
};

const arrowMotion = {
  rest: {
    x: 0,
    transition,
  },
  hover: {
    x: -300,
    transition,
  },
};

export const LogoutButton = (props: HTMLAttributes<HTMLButtonElement>) => {
  return (
    <StyledButton type="button" {...props}>
      <StyledSvg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        x="0px"
        y="0px"
        viewBox="0 0 490.3 490.3"
        initial="rest"
        whileHover="rest"
        animate="hover"
      >
        <path
          d="M0,121.05v248.2c0,34.2,27.9,62.1,62.1,62.1h200.6c34.2,0,62.1-27.9,62.1-62.1v-40.2c0-6.8-5.5-12.3-12.3-12.3
  		s-12.3,5.5-12.3,12.3v40.2c0,20.7-16.9,37.6-37.6,37.6H62.1c-20.7,0-37.6-16.9-37.6-37.6v-248.2c0-20.7,16.9-37.6,37.6-37.6h200.6
  		c20.7,0,37.6,16.9,37.6,37.6v40.2c0,6.8,5.5,12.3,12.3,12.3s12.3-5.5,12.3-12.3v-40.2c0-34.2-27.9-62.1-62.1-62.1H62.1
  		C27.9,58.95,0,86.75,0,121.05z"
        />
        <motion.path
          variants={arrowMotion}
          d="M385.4,337.65c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6l83.9-83.9c4.8-4.8,4.8-12.5,0-17.3l-83.9-83.9
  		c-4.8-4.8-12.5-4.8-17.3,0s-4.8,12.5,0,17.3l63,63H218.6c-6.8,0-12.3,5.5-12.3,12.3c0,6.8,5.5,12.3,12.3,12.3h229.8l-63,63
  		C380.6,325.15,380.6,332.95,385.4,337.65z"
        />
      </StyledSvg>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: none;
  outline: none;
`;

const StyledSvg = styled(motion.svg)`
  fill: var(--color-text);
  width: auto;
  height: 100%;

  &:hover {
    fill: var(--color-primary);
  }
`;
