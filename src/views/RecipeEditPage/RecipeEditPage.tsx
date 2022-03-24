import React, { useEffect, useState } from 'react';

import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';

import { RecipeEditView } from './RecipeEditView';
import { useRootStore } from 'providers/RootStoreProvider';
import { Recipe } from 'types/recipe';

export const RecipeEditPage = observer(function RecipeEditPage() {
  const params = useParams();
  const id = params.recipeId;
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const { recipeStore } = useRootStore();

  useEffect(() => {
    if (id) {
      const fetchRecipe = async () => {
        const data = await recipeStore.getRecipe(id);
        setRecipe(data);
      };

      fetchRecipe();
    }
  }, [id, recipeStore, setRecipe]);

  return <RecipeEditView recipe={recipe} saveRecipe={recipeStore.saveRecipe} deleteRecipe={recipeStore.deleteRecipe} />;
});
