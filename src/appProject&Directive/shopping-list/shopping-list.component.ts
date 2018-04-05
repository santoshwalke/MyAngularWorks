import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
// ingredients : Ingredients[] = [
// new Ingredients ('Apple', 5),
// new Ingredients ('Tomatoes', 10)
// ];
 ingredients : Ingredients[];
   subscription : Subscription;
  constructor(private shoppingListService : ShoppingListService) { }
  ngOnInit() {
  	this.ingredients = this.shoppingListService.getIngredients();
  	this.subscription = this.shoppingListService.ingredientsChanged
  	.subscribe(
  		(ingredients :  Ingredients[]) => {
  			this.ingredients = ingredients;
  		}
  	);
  }
  onEditItem(index : number) {
    this.shoppingListService.startEditing.next(index);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
