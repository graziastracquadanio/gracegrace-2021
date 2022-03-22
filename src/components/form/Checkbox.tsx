import React, { InputHTMLAttributes } from 'react';

import styled from 'styled-components';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Checkbox = ({ label, ...props }: Props) => (
  <Label htmlFor={props.id}>
    <Input type="checkbox" {...props} />
    {label}
  </Label>
);

const Label = styled.label`
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;
  font-weight: var(--font-weight-secondary-bold);
  line-height: 1.1;
  cursor: pointer;
`;

const Input = styled.input`
  appearance: none;
  background-color: white;
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid currentColor;
  border-radius: 0.15em;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
  cursor: pointer;

  &::before {
    content: '';
    width: 0.65em;
    height: 0.65em;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--color-primary);
    transform-origin: center center;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  }

  &:checked::before {
    transform: scale(1);
  }
`;
