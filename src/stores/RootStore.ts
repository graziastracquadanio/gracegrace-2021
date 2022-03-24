import { AuthStore } from './AuthStore';
import { RecipeStore } from './RecipeStore';
import { TagsStore } from './TagsStore';
import { UiStore } from './UiStore';
import { db, storage } from 'services/FirebaseService';

export class RootStore {
  db;
  storage;
  uiStore;
  authStore;
  recipeStore;
  tagsStore;

  constructor() {
    this.db = db;
    this.storage = storage;
    this.uiStore = new UiStore();
    this.authStore = new AuthStore(this);
    this.recipeStore = new RecipeStore(this);
    this.tagsStore = new TagsStore(this);

    this.tagsStore.init();
  }
}
