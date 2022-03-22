import React, { ChangeEventHandler, useEffect } from 'react';

import styled from 'styled-components';

import { Input } from './Input';
import { Textarea } from './Textarea';
import { Button } from 'components/Button';
import { TrashButton } from 'components/TrashButton';

interface Props {
  name: string;
  values: string[] | undefined;
  rows?: number;
  placeholder?: string;
  handleChange: ChangeEventHandler | undefined;
  onRemoveItem: (index: number) => void;
  onAddItem: (value: any, index?: number) => void;
}

export const DraggableList = ({
  name,
  values,
  rows = 1,
  placeholder,
  handleChange,
  onAddItem,
  onRemoveItem,
}: Props) => {
  useEffect(() => {
    if (values?.length === 0) {
      onAddItem('');
    }
  }, [onAddItem, values]);

  return (
    <ControlList>
      {values &&
        values.map((value, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <ControlListItem key={`${name}-${index}`}>
            <ControlColumn>
              {rows > 1 ? (
                <Textarea
                  name={`${name}.${index}`}
                  value={value}
                  {...(rows > 1 && { rows })}
                  onChange={handleChange}
                  placeholder={placeholder}
                />
              ) : (
                <Input
                  name={`${name}.${index}`}
                  value={value}
                  {...(rows > 1 && { rows })}
                  onChange={handleChange}
                  placeholder={placeholder}
                />
              )}
              {values.length > 1 && index !== values.length - 1 && (
                <InsertButton type="button" onClick={() => onAddItem('', index + 1)} />
              )}
            </ControlColumn>
            {values.length > 1 && <StyledTrashButton color="var(--color-text)" onClick={() => onRemoveItem(index)} />}
          </ControlListItem>
        ))}
      <ActionContainer>
        <Button onClick={() => onAddItem('')} size="small" variant="gray">
          Add new item
        </Button>
      </ActionContainer>
    </ControlList>
  );
};

const ControlList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const ControlListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const ControlColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const InsertButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  height: 1.5rem;
  width: 100%;
  background-color: transparent;
  transition: height 0.1s linear 0.1s;

  &:after {
    content: '------- insert new row -------';
    text-transform: uppercase;
    opacity: 0;
    color: transparent;
    transition: all 0.1s linear 0.1s;
  }

  &:hover:after {
    padding: 0.5rem;
    border-radius: 2rem;
    color: var(--color-gray);
    opacity: 1;
  }

  &:hover {
    color: var(--color-primary);
    height: 2.5rem;
  }
`;

const StyledTrashButton = styled(TrashButton)`
  width: 2rem;
`;

const ActionContainer = styled.li`
  display: flex;
  margin-top: 1rem;
`;
