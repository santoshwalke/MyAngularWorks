import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RecipesComponents } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeItemsComponent } from './recipe-list/recipe-items/recipe-items.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { SharedModule } from '../shared/shared.module';

import { AuthGuardService } from '../auth/auth-guard.service';

@NgModule({
  declarations: [
      RecipesComponents,
      RecipeStartComponent,
      RecipeListComponent,
      RecipeDetailsComponent,
      RecipeEditComponent,
      RecipeItemsComponent
  ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        RecipesRoutingModule,
        SharedModule
    ],
    providers : [ 
        AuthGuardService
    ]
})
export class RecipesModule {
    
}