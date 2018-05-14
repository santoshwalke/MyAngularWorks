import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';

import { HeadersComponent } from './headers/headers.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';

import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/data-storage.service';
import {AuthService} from '../auth/auth.service';

@NgModule({
	declarations : [ HeadersComponent , HomeComponent],
	imports : [ SharedModule , AppRoutingModule],
	exports : [ AppRoutingModule, HeadersComponent],
	providers: [
		ShoppingListService,
		RecipeService, 
		DataStorageService, 
		AuthService
	],
})
export class CoreModule {

}