import { EventEmitter } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';

export class ShoppingListService {
	//ingredientsChanged = new EventEmitter<Ingredients[]>();
	ingredientsChanged = new Subject<Ingredients[]>();
	startEditing = new Subject<number>();
	private ingredients : Ingredients[] = [
	new Ingredients ('Apple', 5),
	new Ingredients ('Tomatoes', 10)
	];
	getIngredients() {
		return this.ingredients.slice();//copy of array
	}
	getIngredient(index : number) {
		return this.ingredients[index];
	}
	addIngredients(ingredients : Ingredients) {
		this.ingredients.push(ingredients);
		this.ingredientsChanged.next(this.ingredients.slice());
	}
	updateIngredients(index : number, newIngredients : Ingredients) {
		this.ingredients[index] = newIngredients;
		this.ingredientsChanged.next(this.ingredients.slice());
	}
	deleteIngredients(index : number) {
		this.ingredients.splice(index, 1);
		this.ingredientsChanged.next(this.ingredients.slice());
	}
	addIngredient(ingredients : Ingredients[]) {
		// for(let ingredients of ingredient) {
		// 	this.addIngredients(ingredients);
		// }
		this.ingredients.push(...ingredients);
		this.ingredientsChanged.next(this.ingredients.slice())
	}
}