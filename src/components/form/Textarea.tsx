import { TextareaHTMLAttributes } from 'react';

import styled from 'styled-components';

import { CommonFormControlStyle } from './style';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean;
}

export const Textarea = styled.textarea<Props>`
  ${CommonFormControlStyle}
  resize: vertical;
`;
