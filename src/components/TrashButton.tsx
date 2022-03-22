import React, { HTMLAttributes } from 'react';

import { motion } from 'framer-motion';
import styled from 'styled-components';

const transition = {
  ease: 'easeOut',
  duration: 0.2,
  type: 'tween',
};

const lidMotion = {
  rest: {
    originX: 0,
    originY: 0,
    rotate: 0,
    x: 0,
    transition,
  },
  hover: {
    rotate: -12,
    x: -2,
    transition,
  },
};

export const TrashButton = (props: HTMLAttributes<HTMLButtonElement>) => (
  <StyledButton type="button" {...props}>
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 25 24.8"
      width="100"
      height="100"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <path d="M6.8,8.8h11L17,22.6 H7.6L6.8,8.8z M4.9,7l1,17.4h12.8 l1-17.4 H4.9z" />
      <polygon points="13.6,10.3 13.1,21.2 14.9,21.2 15.4,10.3 " />
      <polygon points="11.5,21.2 11,10.3 9.2,10.3 9.7,21.2 " />
      <motion.path
        variants={lidMotion}
        d="M20.4,4h-4.8l-0.5-1.6 H9.5L9,4 H4.2 L3.5,8.6h17.6 L20.4,4z M9.9,3.2h4.8 L14.9,3.9h-5.2z M5.6,6.7l0.2-1 h13l0.2,1 H5.6z"
      />
    </StyledSvg>
  </StyledButton>
);

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
  fill: var(--color-gray);
  width: 100%;
  height: auto;

  &:hover {
    fill: var(--color-primary);
  }
`;
