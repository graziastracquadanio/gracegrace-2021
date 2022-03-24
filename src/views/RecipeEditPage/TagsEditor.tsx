import React, { useEffect, useMemo, useState } from 'react';

import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

import { Button } from 'components/Button';
import { Input } from 'components/form';
import { Tag as TagButton } from 'components/Tag';
import { useRootStore } from 'providers/RootStoreProvider';
import { Tag } from 'types/tag';

interface Props {
  initialSelection?: string[];
  onChange?: (selection: string[]) => void;
}

export const TagsEditor = observer(function TagsEditor({ initialSelection, onChange }: Props) {
  const { tagsStore } = useRootStore();
  const [newTagName, setNewTagName] = useState<string>('');
  const [selection, setSelection] = useState<Tag[]>([]);

  const tags = useMemo(() => tagsStore.tags || [], [tagsStore.tags]);

  useEffect(() => {
    if (initialSelection?.length) {
      const nextSelection: Tag[] = tags.filter((tag) => initialSelection.includes(tag.id));
      setSelection(nextSelection);
    }
  }, [initialSelection, setSelection, tags]);

  const saveTag = async () => {
    if (newTagName) {
      // TODO : check if already exists
      // select tag
      const id = newTagName.trim().toLowerCase().replaceAll(' ', '-');
      const newTag = { id, name: newTagName };
      await tagsStore.addTag(newTag);
      setNewTagName('');
    }
  };

  const toggleTag = (tag: Tag) => {
    const isSelected = selection.includes(tag);
    const nextSelection = isSelected ? selection.filter((t) => t.id !== tag.id) : [...selection, tag];
    setSelection(nextSelection);
    if (onChange) {
      onChange(nextSelection.map(({ id }) => id));
    }
  };

  return (
    <div>
      <TagsList>
        {tags &&
          tags?.map((tag) => (
            <TagContainer key={tag.id}>
              <StyledTag
                tag={tag}
                onClick={() => {
                  toggleTag(tag);
                }}
                variant={selection.includes(tag) ? 'primary' : 'gray'}
              />
            </TagContainer>
          ))}
      </TagsList>

      <TagControl>
        <StyledInput
          value={newTagName}
          onChange={(e) => {
            setNewTagName(e.target.value);
          }}
          placeholder="Add new"
        />
        <StyledButton onClick={saveTag} disabled={!newTagName}>
          Add
        </StyledButton>
      </TagControl>
    </div>
  );
});

const TagsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TagContainer = styled.span``;

const StyledTag = styled(TagButton)`
  color: var(--color-background);
`;

const TagControl = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
`;

const StyledInput = styled(Input)`
  flex: 1;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
`;

const StyledButton = styled(Button)`
  padding-left: 1rem;
  padding-right: 1rem;
`;
