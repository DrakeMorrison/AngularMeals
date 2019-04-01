import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2017/11/08/15/34/recipe-2930786_1280.jpg'),
        new Recipe('Another Test Recipe', 'This is simply another test', 'https://cdn.pixabay.com/photo/2017/11/08/15/34/recipe-2930786_1280.jpg')
      ]    

  getRecipes() {
      return this.recipes.slice();
  }
}