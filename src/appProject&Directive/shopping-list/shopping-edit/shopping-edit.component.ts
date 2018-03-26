import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredients } from '../../shared/ingredients.model';	
import { ShoppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
	@ViewChild('nameInput') nameInputRef : ElementRef;
	@ViewChild('amountInput') amountInputRef : ElementRef;
	//@Output() ingredientAdded = new EventEmitter<Ingredients>();
  constructor(private shoppingListService : ShoppingListService) { }
  ngOnInit() {
  }
  onAddItem() {
  	const ingName = this.nameInputRef.nativeElement.value;
  	const ingAmount = this.amountInputRef.nativeElement.value;
  	const newIngredient = new Ingredients(ingName, ingAmount);
  	//this.ingredientAdded.emit(newIngredient);
    this.shoppingListService.addIngredients(newIngredient);
  }
}
