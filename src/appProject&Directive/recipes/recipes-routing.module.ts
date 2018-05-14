import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponents } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeItemsComponent } from './recipe-list/recipe-items/recipe-items.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { AuthGuardService } from '../auth/auth-guard.service';


const appRoutes : Routes = [
    {
    	path : '',
    	component : RecipesComponents,
    	children : [
    		{
    			path : '',
    			component : RecipeStartComponent
    		},
    		{
    			path : 'new',
    			component : RecipeEditComponent,
    			canActivate : [AuthGuardService]
    		},
    		{
    			path : ':id',
    			component : RecipeDetailsComponent
    		},
    		{
    			path : ':id/edit',
    			component : RecipeEditComponent,
    			canActivate : [AuthGuardService]
    		}
    	] 
    }
]

@NgModule({
    imports : [RouterModule.forChild(appRoutes)],
	exports : [RouterModule]
})
export class RecipesRoutingModule {
    
}