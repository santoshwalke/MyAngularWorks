import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AutRoutingModule } from './auth-routing.module';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
	declarations : [
		SignupComponent,
		SigninComponent
	],
	imports : [ 
		FormsModule, 
		AutRoutingModule
	]
})
export class AuthModule {

}