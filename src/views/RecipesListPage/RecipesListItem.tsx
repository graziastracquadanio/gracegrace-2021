import React from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TextLink } from 'components/TextLink';
import { BREAKPOINTS } from 'constants/css-variables';
import { useRootStore } from 'providers/RootStoreProvider';
import { Recipe } from 'types/recipe';

interface Props {
  recipe: Recipe;
  onTagClick: (id: string, single?: boolean) => void;
}

export const RecipesListItem = ({ recipe, onTagClick }: Props) => {
  const { id, title, thumb, tags: tagIds } = recipe;
  const { tagsStore } = useRootStore();
  const tags = tagIds ? tagsStore.getTags(tagIds) : [];

  return (
    <Container>
      <ThumbContainer to={`/recipes/${id}`}>
        <Thumb alt={title} src={thumb || '/assets/fallback.png'} loading="lazy" />
      </ThumbContainer>
      <Details>
        <Title>
          <TextLink to={`/recipes/${id}`}>{title}</TextLink>
        </Title>
        {tags && (
          <Tags>
            {tags.map((tag) => (
              <Tag key={tag.id} onClick={() => onTagClick(tag.id, true)}>
                #{tag.name.replace(/\s+/g, '')}
              </Tag>
            ))}
          </Tags>
        )}
      </Details>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`;

const ThumbContainer = styled(Link)`
  flex-shrink: 0;
  width: 5rem;
  height: 5rem;
  background-color: var(--color-gray-light);
  background-image: url('/assets/fallback.png');
  background-size: contain;
  position: relative;

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    opacity: ${(props) => (props.theme.colorMode === 'light' ? 0 : 0.2)};
    background-color: var(--color-background-dark);
    z-index: 2;
  }
`;

const Thumb = styled.img`
  display: block;
  width: 100%;
`;

const Details = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h6`
  /* font-family: var(--font-primary);
  text-decoration: none;
  line-height: 1.2;
  color: var(--color-text); */
`;

const Tags = styled.div`
  line-height: 1.1;
`;

const Tag = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  font-family: var(--font-secondary);
  font-weight: var(--font-weight-secondary);
  font-size: 0.8em;
  color: var(--color-gray);
  display: inline-block;
  margin-right: 0.5rem;

  @media (max-width: ${BREAKPOINTS.medium}) {
    pointer-events: none;
  }
`;

// https://www.flaticon.com/free-icon/dinner_5662776?term=plate%20heart&page=2&position=59&page=2&position=59&related_id=5662776&origin=search
