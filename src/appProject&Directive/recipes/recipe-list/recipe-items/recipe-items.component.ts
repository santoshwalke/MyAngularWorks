import { Component, OnInit, Input, EventEmitter,Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
@Component({
  selector: 'app-recipe-items',
  templateUrl: './recipe-items.component.html',
  styleUrls: ['./recipe-items.component.css']
})
export class RecipeItemsComponent implements OnInit {
	@Input() recipe: Recipe;
  @Input() index: number;
	// @Output() recipeSelected = new EventEmitter<void>();
  // constructor(private recipeService : RecipeService) { }
  ngOnInit() {}
  // onSelected() {
  // 	// this.recipeSelected.emit();
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }
}
