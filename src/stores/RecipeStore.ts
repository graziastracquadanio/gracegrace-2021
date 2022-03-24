import { makeAutoObservable, runInAction } from 'mobx';

import type { RootStore } from './RootStore';
import { RecipeService } from 'services/RecipeService';
import type { Recipe, RecipeBase } from 'types/recipe';
import { printError } from 'utils/others';

export class RecipeStore {
  recipes: RecipeBase[] = [];

  private uiStore;
  private recipeService;

  constructor({ db, storage, uiStore }: RootStore) {
    makeAutoObservable(this);
    this.recipeService = new RecipeService(db, storage);
    this.uiStore = uiStore;
  }

  fetchRecipesIfNeeded = () => {
    if (!this.recipes.length) {
      this.fetchRecipes();
    }
  };

  fetchRecipes = async () => {
    this.uiStore.loading = true;
    let data: RecipeBase[] = [];
    try {
      data = await this.recipeService.getAll();
      if (!data) {
        runInAction(() => {
          const message = 'Something went wrong fetching the data';
          this.uiStore.addNotification(message, 'danger', 5000);
        });
      }
    } catch (error) {
      printError(error);
    } finally {
      runInAction(() => {
        this.recipes = data;
        this.uiStore.loading = false;
      });
    }
  };

  getRecipe = async (id: string): Promise<Recipe | null> => {
    this.uiStore.loading = true;
    let data: Recipe | null = null;
    try {
      data = await this.recipeService.get(id);
      if (data === null) {
        // navigate('/404', { replace: true, state: { message: 'Recipe not found' } });
      }
    } catch (error) {
      printError(error);
      runInAction(() => {
        this.uiStore.addFailNotification('Something went wrong fetching the data');
      });
    } finally {
      runInAction(() => {
        this.uiStore.loading = false;
      });
    }

    return Promise.resolve(data);
  };

  saveRecipe = async (data: Recipe): Promise<string | null> => {
    let id = null;
    this.uiStore.loading = true;
    try {
      id = await this.recipeService.save(data);
    } catch (error: any) {
      printError(error);
      runInAction(() => {
        this.uiStore.addFailNotification(`Something went wrong saving the data: ${error?.message}`);
      });
    } finally {
      runInAction(() => {
        this.uiStore.loading = false;
      });
    }
    return Promise.resolve(id);
  };

  deleteRecipe = async (id: string) => {
    this.uiStore.loading = true;
    try {
      await this.recipeService.delete(id);
    } catch (error) {
      printError(error);
      runInAction(() => {
        this.uiStore.addFailNotification('Something went wrong deleting the data');
      });
    } finally {
      runInAction(() => {
        this.uiStore.loading = false;
      });
    }
  };

  // queryRecipes = async (s: string) => {
  //   this.uiStore.loading = true;
  //   try {
  //     await this.recipeService.query(s);
  //   } catch (error) {
  //     printError(error);
  //     runInAction(() => {
  //       this.uiStore.addFailNotification('Something went wrong deleting the data');
  //     });
  //   } finally {
  //     runInAction(() => {
  //       this.uiStore.loading = false;
  //     });
  //   }
  // };
}
