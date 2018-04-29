import { Injectable } from '@angular/core'; 
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
	constructor(
	private http : Http, 
	private recipeService : RecipeService,
	private authService : AuthService) {}

	storeRecipe() {
		const token = this.authService.getTocken();
		return this.http.put('https://myproject-efacd.firebaseio.com/recipes.json?auth=' + token , this.recipeService.getRecipes());
	}
	getRecipes() {
		const token = this.authService.getTocken();
		this.http.get('https://myproject-efacd.firebaseio.com/recipes.json?auth=' + token)
		.map((response : Response) => {
			const recipes: Recipe[] = response.json();
			for(let recipe of recipes) {
				if(!recipe['ingredients']) {
					console.log(recipe);
					recipe['ingredients'] = [];
				}
			}
			return recipes;
		})
		.subscribe(
			(recipes : Recipe[]) => {
				this.recipeService.setRecipe(recipes);
			}
		);
	}
}