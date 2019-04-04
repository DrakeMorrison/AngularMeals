import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe',
         'This is simply a test',
          'https://cdn.pixabay.com/photo/2017/11/08/15/34/recipe-2930786_1280.jpg', 
          [
              new Ingredient('Meat', 1),
              new Ingredient('French Fries', 20)
          ]),
        new Recipe('Another Test Recipe',
         'This is simply another test',
          'https://cdn.pixabay.com/photo/2017/11/08/15/34/recipe-2930786_1280.jpg',
           [
               new Ingredient('Buns', 2),
               new Ingredient('Meat', 2)
           ])
      ];

      constructor(private slService: ShoppingListService) {}

  getRecipes() {
      return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipe(index: number) {
      return this.recipes[index];
  }
}