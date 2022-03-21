import React from 'react';

import { NavLink } from 'react-router-dom';
import type { NavLinkProps } from 'react-router-dom';
import styled from 'styled-components';

import { LinkStyle } from './GlobalStyle/LinkStyle';

interface Props extends NavLinkProps {
  to: string;
  activeClassName?: string;
}

export const TextLink = ({ to, activeClassName, ...other }: Props) => {
  const external = /^https?:\/\//.test(to);
  return external ? (
    <ExternalLink href={to} target="_blank" />
  ) : (
    <InternalLink to={to} className={activeClassName} {...other} />
  );
};

const InternalLink = styled(NavLink)`
  ${LinkStyle};
`;

const ExternalLink = styled.a`
  ${LinkStyle};
`;
