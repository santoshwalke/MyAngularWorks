import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/Rx';

import { Ingredients } from '../../shared/ingredients.model';	
import { ShoppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
	@ViewChild('f') shoppingListForm : NgForm;
  subscription : Subscription;
  editMode = false;
  editedItemIndex : number;
  editItem : Ingredients;

  constructor(private shoppingListService : ShoppingListService) { }
  ngOnInit() {
    this.subscription = this.shoppingListService.startEditing
    .subscribe(
      (index : number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editItem = this.shoppingListService.getIngredient(index);
        this.shoppingListForm.setValue({
          'name' : this.editItem.name,
          'amount' : this.editItem.amount 
        });
      }
      );
    }
  onAddItem(form : NgForm) {
    const value = form.value;
  	const newIngredient = new Ingredients(value.name, value.amount);
  	//this.ingredientAdded.emit(newIngredient);
    if (this.editMode) {
    this.shoppingListService.updateIngredients(this.editedItemIndex, newIngredient); 
    } else {
      this.shoppingListService.addIngredients(newIngredient);
    }
    this.editMode = false; 
    form.reset();
  }
  deleteItem(index : number) {
    this.shoppingListService.deleteIngredients(this.editedItemIndex);
    this.clearItem();
  }
  clearItem() {
    this.shoppingListForm.reset();
    this.editMode= false;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
