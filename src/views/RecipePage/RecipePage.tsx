import React, { useEffect, useState } from 'react';

import { observer } from 'mobx-react-lite';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { RecipeView } from './RecipeView';
import { useRootStore } from 'providers/RootStoreProvider';
import { Recipe } from 'types/recipe';

export const RecipePage = observer(function RecipePage() {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.recipeId;
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const {
    authStore,
    recipeStore: { getRecipe },
  } = useRootStore();

  useEffect(() => {
    if (id) {
      const fetchRecipe = async () => {
        const data = await getRecipe(id);
        setRecipe(data);
      };

      fetchRecipe();
    } else {
      navigate('/recipes');
    }
  }, [id, getRecipe, setRecipe, navigate]);

  if (recipe && recipe.id === id) {
    return (
      <>
        <RecipeView recipe={recipe} />
        {authStore.isLoggedIn && (
          <Footer>
            <Link to="edit">Edit recipe</Link>
          </Footer>
        )}
      </>
    );
  }
  return null;
});

const Footer = styled.div`
  grid-area: footer;
  display: flex;
  justify-content: center;
`;
