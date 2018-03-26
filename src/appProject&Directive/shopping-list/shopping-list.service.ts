import { EventEmitter } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

export class ShoppingListService {
	ingredientsChanged = new EventEmitter<Ingredients[]>();
	private ingredients : Ingredients[] = [
	new Ingredients ('Apple', 5),
	new Ingredients ('Tomatoes', 10)
	];
	getIngredients() {
		return this.ingredients.slice();//copy of array
	}
	addIngredients(ingredients : Ingredients) {
		this.ingredients.push(ingredients);
		this.ingredientsChanged.emit(this.ingredients.slice());
	}
	addIngredient(ingredients : Ingredients[]) {
		// for(let ingredients of ingredient) {
		// 	this.addIngredients(ingredients);
		// }
		this.ingredients.push(...ingredients);
		this.ingredientsChanged.emit(this.ingredients.slice())
	}
}