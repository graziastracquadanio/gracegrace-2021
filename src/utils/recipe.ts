import type { StorageReference } from 'firebase/storage';
import { getDownloadURL } from 'firebase/storage';
import { intersection } from 'lodash';

import type { Recipe, RecipeBase, RecipeDetails } from 'types/recipe';

export const imageFetcher = async (ref: StorageReference): Promise<string | null> => {
  try {
    const image = await getDownloadURL(ref);
    return image;
  } catch {
    return null;
  }
};

const filterInvalidItems = (values: string[]) => values.filter((value) => value.length > 0);

export const getRecipeForSaving = ({
  id: originalId,
  title,
  description,
  imageName,
  published = false,
  createdAt = Date.now(),
  ingredients,
  instructions: originalInstructions,
  tags,
}: Recipe): { base: RecipeBase; details: RecipeDetails } | null => {
  const id = originalId || title?.trim().toLowerCase().replaceAll(' ', '-');

  if (!id) {
    return null;
  }

  const instructions = originalInstructions && filterInvalidItems(originalInstructions);

  return {
    base: {
      id,
      title,
      createdAt,
      imageName: imageName || `${id}.jpeg`,
      lastEdit: Date.now(),
      published,
      tags,
    },
    details: {
      id,
      description,
      ingredients,
      instructions,
    },
  };
};

export const filterRecipes = (list: Recipe[], s?: string, t?: string[]): Recipe[] => {
  let filteredRecipes = list || [];
  if (s?.length) {
    const search = s.toLowerCase();
    filteredRecipes = filteredRecipes.filter(({ title }) => title?.toLowerCase().includes(search)) ?? [];
  }
  if (t?.length) {
    filteredRecipes = filteredRecipes.filter(({ tags }) => intersection(tags, t).length === t.length);
  }
  return filteredRecipes;
};
