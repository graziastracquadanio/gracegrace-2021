import React from 'react';

import styled from 'styled-components';

import { IconProps } from './IconProps';
import { icons } from './icons';

interface Props extends IconProps {
  icon: string;
}

const IconSelector = ({ icon: name, className, activeClass }: Props) => {
  const IconSvg = icons[name];

  if (!IconSvg) {
    throw new Error('You must select an existing icon or add a new one');
  }

  return <IconSvg className={className} activeClass={activeClass} />;
};

export const Icon = styled(IconSelector)`
  height: 2rem;
`;
