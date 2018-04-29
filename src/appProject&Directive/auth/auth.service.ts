import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
	token : string;
	constructor(private route : Router) {}
	signup(email : string, password : string) {
		firebase.auth().createUserWithEmailAndPassword(email, password)
		.catch(
			error => {
				console.log(error);
			}
		);
	}
	signin(email : string, password : string) {
		firebase.auth().signInWithEmailAndPassword(email, password)
		.then(
			response => {
				this.route.navigate(['/']);
				firebase.auth().currentUser.getToken()
				.then(
					(token : string) => {
						this.token = token;
					}
				);
			}
		)
		.catch(
			error => {
				console.log(error);
			}
		);
	}
	getTocken() {
		firebase.auth().currentUser.getToken()
		.then(
			(token : string) => {
				this.token = token;
			}
		);
		return this.token;
	}
	isAuthenticated() {
		return this.token != null ;
	}
	logOut() {
		firebase.auth().signOut();
		this.token = null;
	}
}