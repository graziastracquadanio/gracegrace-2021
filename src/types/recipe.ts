export interface RecipeBase {
  id: string;
  title?: string;
  published?: boolean;
  createdAt?: number;
  lastEdit?: number;
  imageName?: string;
  tags?: string[];

  // added
  thumb?: string | null;
}
export interface RecipeDetails {
  id: string;
  description?: string;
  ingredients?: string;
  instructions?: string[];
}

export interface Recipe extends RecipeBase {
  description?: string;
  ingredients?: string;
  instructions?: string[];

  // added
  cover?: string | null;
}
