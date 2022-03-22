import { InputHTMLAttributes } from 'react';

import styled from 'styled-components';

import { CommonFormControlStyle } from './style';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

export const Input = styled.input<Props>`
  ${CommonFormControlStyle}
`;
