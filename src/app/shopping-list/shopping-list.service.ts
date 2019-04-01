import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    newIngredientEvent = new EventEmitter<Ingredient>();

    addNewIngredient(newIngredient: Ingredient) {
        
        this.newIngredientEvent.emit();
    }
}