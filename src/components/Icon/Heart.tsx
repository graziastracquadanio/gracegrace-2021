import React from 'react';

import styled from 'styled-components';

import type { IconProps } from './IconProps';

export const Heart = ({ className, activeClass = 'active' }: IconProps) => (
  <Svg className={className} activeClass={activeClass} viewBox="0 0 24 24">
    <Path d="M 19.101 2.308 C 16.166 1.245 13.01 3.022 12.003 6.28 C 10.995 3.017 7.839 1.245 4.904 2.308 C 1.934 3.392 0.314 6.965 1.278 10.301 C 2.206 13.481 10.803 21.999 11.903 21.999 C 13.004 21.999 21.792 13.491 22.72 10.301 C 23.688 6.958 22.068 3.384 19.101 2.308 Z" />
  </Svg>
);

const Path = styled.path`
  stroke: none;
  transition: all 0.2s ease-in;
`;

const Svg = styled.svg<IconProps>`
  height: 100%;
  width: auto;
  fill: var(--color-icon);

  &:hover,
  ${(props) => `.${props.activeClass}`} & {
    stroke: var(--color-icon-active);
  }
`;
