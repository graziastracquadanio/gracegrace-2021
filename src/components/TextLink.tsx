import React, { useMemo } from 'react';

import { NavLink } from 'react-router-dom';
import type { NavLinkProps } from 'react-router-dom';
import styled from 'styled-components';

import { LinkStyle } from './GlobalStyle/LinkStyle';

type Props = NavLinkProps | React.AnchorHTMLAttributes<HTMLAnchorElement>;

const isInternal = (link: Props): link is NavLinkProps => (link as NavLinkProps).to !== undefined;

export const TextLink = (props: Props) => {
  return useMemo(
    () => (isInternal(props) ? <InternalLink {...props} /> : <ExternalLink target="_blank" {...props} />),
    [props],
  );
};

const InternalLink = styled(NavLink)`
  ${LinkStyle};
`;

const ExternalLink = styled.a`
  ${LinkStyle};
`;
