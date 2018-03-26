import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService  {
	constructor(private shoppingListService : ShoppingListService) {}
	recipeSelected = new EventEmitter<Recipe>();
	private recipes : Recipe[] = [
	new Recipe (
		'chicken biryani', 
		'Recipes1 description', 
		'https://i0.wp.com/media.hungryforever.com/wp-content/uploads/2017/06/09121657/chicken-fry-biryani-recipes.jpg?w=1269&strip=all&quality=80',
			[
				new Ingredients('Meat', 1),
				new Ingredients('French Frize', 20)
			]
		),
	new Recipe (
		'Mutton Beliram', 
		'Recipes2 description', 
		'https://i.ndtvimg.com/i/2017-10/mutton-recipes_620x330_61508135398.jpg',
		[
		new Ingredients('Meat', 2),
		new Ingredients('French Frize', 30)
		]
	),
	new Recipe (
		'Mutton Liver Curry', 
		'Recipes3 description', 
		'http://3.bp.blogspot.com/-QmLsvsk6m3A/VC6TxeEEr4I/AAAAAAAACkk/CuZ0wH7cWfM/s1600/DSC_0003%2Bcopy.jpg',
		[
		new Ingredients('Meat', 3),
		new Ingredients('French Frize', 40)
		])
];
getRecipes() {
	return this.recipes.slice();
}

getRecipe(index : number) {
	return this.recipes.slice()[index]
}

addIngredientsToShoppingList(ingredients : Ingredients[]) {
	this.shoppingListService.addIngredient(ingredients);
}

}