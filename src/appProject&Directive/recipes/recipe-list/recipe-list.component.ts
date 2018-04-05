import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs/Subscription';

@Component ({
	selector : 'app-recipe-list',
	templateUrl : './recipe-list.component.html',
	styleUrls : ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit, OnDestroy {
	@Output() recipeWasSelected = new Subject<Recipe>();
  subscription : Subscription;
// recipes : Recipe[] = [
// 	new Recipe ('chicken biryani', 'Recipes1 description', 'https://i0.wp.com/media.hungryforever.com/wp-content/uploads/2017/06/09121657/chicken-fry-biryani-recipes.jpg?w=1269&strip=all&quality=80'),
// 	new Recipe ('Mutton Beliram', 'Recipes2 description', 'https://i.ndtvimg.com/i/2017-10/mutton-recipes_620x330_61508135398.jpg'),
// 	new Recipe ('Mutton Liver Curry', 'Recipes3 description', 'http://3.bp.blogspot.com/-QmLsvsk6m3A/VC6TxeEEr4I/AAAAAAAACkk/CuZ0wH7cWfM/s1600/DSC_0003%2Bcopy.jpg')
// ];
recipes : Recipe[];
constructor(
  private recipeService : RecipeService,
  private router : Router,
  private route : ActivatedRoute ) {}

  ngOnInit() {
    this.subscription = this.recipeService.recipesChanged
    .subscribe(
      (recipes : Recipe[]) => {
        this.recipes = recipes;
      }
    );
  	this.recipes = this.recipeService.getRecipes();
  }
  onRecipeSelected(recipe : Recipe) {
  	this.recipeWasSelected.next(recipe);
  }
  newRecipe() {
    this.router.navigate(['new'], {relativeTo : this.route});
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}