import React, { useState } from 'react';

import { motion } from 'framer-motion';
import styled from 'styled-components';

import { Input } from 'components/form';

interface Props {
  onSearch: (value: string) => void;
}

const iconSteps = {
  input: {
    empty: {
      boxShadow: '0px 2px 0px 0px var(--color-gray)',
    },
    filled: {
      boxShadow: '0px 2px 0px 0px var(--color-primary)',
    },
  },
  circle: {
    empty: {
      border: '3px solid var(--color-gray)',
      scale: 1,
    },
    filled: {
      border: '3px solid var(--color-primary)',
      scale: 0,
    },
  },
  handle: {
    empty: {
      height: '60%',
      right: 0,
      bottom: 0,
      background: 'var(--color-gray)',
    },
    filled: {
      height: '100%',
      right: '10%',
      bottom: '10%',
      background: 'var(--color-primary)',
    },
  },
  cross: {
    empty: {
      opacity: 0,
      height: '100%',
      rotate: -45,
      right: '20%',
      bottom: '5%',
      x: '-170%',
      y: '10%',
      transition: {
        bounce: 0,
      },
    },
    filled: {
      opacity: 1,
      height: '100%',
      rotate: 45,
      right: '20%',
      bottom: '5%',
      x: '-170%',
      y: '10%',
    },
  },
};

export const RecipesSearch = ({ onSearch }: Props) => {
  const [search, setSearch] = useState<string>('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
    onSearch(value);
  };

  const clearSearch = () => {
    setSearch('');
    onSearch('');
  };

  return (
    <Container>
      <h6>Are you looking for inspiration?</h6>
      <SearchControl animate={search.length ? 'filled' : 'empty'} initial="empty" variants={iconSteps.input}>
        <SearchInput value={search} onChange={handleSearch} type="text" placeholder="Type something..." />
        <SearchIcon onClick={clearSearch} disabled={!search.length}>
          <SearchCircle variants={iconSteps.circle} />
          <SearchCross variants={iconSteps.cross} />
          <SearchHandle variants={iconSteps.handle} />
        </SearchIcon>
      </SearchControl>
    </Container>
  );
};

const Container = styled.div`
  background-color: var(--color-background-dark);
  transition: background var(--theme-transition);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SearchControl = styled(motion.div)`
  position: relative;
`;

const SearchInput = styled(Input)`
  padding-right: 3rem;
  border: none;
  font-weight: var(--font-weight-secondary-bold);
`;

const SearchIcon = styled.button`
  border: none;
  background: transparent;
  position: relative;
  height: 1.75rem;
  width: 1.75rem;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translate(0, -50%) scale(0.8);

  &:disabled {
    pointer-events: none;
  }
`;

const SearchCircle = styled(motion.span)`
  width: 75%;
  height: 75%;
  position: absolute;
  top: 0;
  left: 0;
  border: 5px solid var(--color-primary);
  border-radius: 50%;
  background-color: var(--color-background-light);
  z-index: 3;
`;

const SearchHandle = styled(motion.span)`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 60%;
  width: 3px;
  background-color: var(--color-primary);
  transform: translateX(50%) rotate(-45deg);
  transform-origin: bottom;
`;

const SearchCross = styled(motion.span)`
  position: absolute;
  height: 60%;
  width: 3px;
  background-color: var(--color-primary);
`;
