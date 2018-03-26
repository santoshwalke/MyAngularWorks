import { Ingredients } from '../shared/ingredients.model';

export class Recipe {
 public name : string;
 public decsription : string;
 public imagePath : string;
 public ingredients : Ingredients[];
 constructor (name : string, dec : string, imagePath : string, ingredients : Ingredients[]) {
 	this.name = name;
 	this.decsription = dec;
 	this.imagePath = imagePath;
 	this.ingredients = ingredients;
 }	
}