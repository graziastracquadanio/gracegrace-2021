import React from 'react';

import { NavLinkProps, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'components/Icon';
import { BREAKPOINTS } from 'constants/css-variables';

interface Props extends Omit<NavLinkProps, 'children'> {
  icon: string;
}

export const NavigationMobileLink = ({ icon, ...props }: Props) => (
  <NavigationLink {...props}>
    <NavigationIcon icon={icon} activeClass="active" />
  </NavigationLink>
);

const NavigationLink = styled(NavLink)`
  @media (min-width: ${BREAKPOINTS.medium}) {
    display: none;
  }
`;

const NavigationIcon = styled(Icon)`
  height: 1.8rem;
`;
