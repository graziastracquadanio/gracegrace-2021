import React from 'react';

import styled from 'styled-components';

import type { IconProps } from './IconProps';

export const Code = ({ className, activeClass = 'active' }: IconProps) => (
  <Svg className={className} activeClass={activeClass} viewBox="0 0 30 24">
    <Path d="M 9.896 5.826 L 2.181 12 L 9.272 18.173" />
    <Path d="M 18.187 1.976 L 11.814 22.023" />
    <Path d="M 20.725 5.826 L 27.819 12 L 20.101 18.173" />
  </Svg>
);

const Path = styled.path`
  fill: none;
  transition: all 0.2s ease-in;
`;

const Svg = styled.svg<IconProps>`
  height: 100%;
  width: auto;

  fill: none;
  stroke: var(--color-icon);
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;

  &:hover,
  ${(props) => `.${props.activeClass}`} & {
    stroke: var(--color-icon-active);
  }

  &:hover {
    ${Path}:first-child {
      transform: translateX(-2px);
    }

    ${Path}:last-child {
      transform: translateX(2px);
    }
  }
`;
