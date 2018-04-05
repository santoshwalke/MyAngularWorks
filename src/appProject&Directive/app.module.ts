import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeadersComponent } from './headers/headers.component';
import { RecipesComponents } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeItemsComponent } from './recipes/recipe-list/recipe-items/recipe-items.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { BasicHighlightDirective } from './all-directive/basic-highlight.directive';
import { BetterHighlightDirective } from './all-directive/better-highlight.directive';
import { DropDownDirective } from './all-directive/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

import { RecipeService } from './recipes/recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    RecipesComponents,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemsComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    DropDownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService,RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
