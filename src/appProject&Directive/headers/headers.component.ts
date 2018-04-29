import { Component, EventEmitter, Output } from '@angular/core';
import { Response } from '@angular/http';

import { DataStorageService } from '../shared/data-storage.service';
import {AuthService} from '../auth/auth.service';
@Component ({
	selector : 'app-headers',
	templateUrl : './headers.component.html'
})
export class HeadersComponent {
	// @Output() featureSelected = new EventEmitter<string>();
	// onSelect(feature : string) {
	// 	this.featureSelected.emit(feature);
	// }
	constructor(
		private dataStorageService : DataStorageService,
		private authService : AuthService) {}
	onSaveingData() {
		this.dataStorageService.storeRecipe().
		subscribe(
			(response : Response) => {
				console.log(response);
			}
		);
	}
	fetchData() {
		this.dataStorageService.getRecipes();
	}
	onLogout() {
		this.authService.logOut();
	}
}