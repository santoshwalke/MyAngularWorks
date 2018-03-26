import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
	numberObsSubscription : Subscription;
	customeObsSubscripation : Subscription;
  constructor() { }

  ngOnInit() {
  	const myNumber = Observable.interval(1000)
  	.map(
  		(data : number) => {
  			return data * 2;
  		});
  	this.numberObsSubscription = myNumber.subscribe(
  		(number : number) => {
  			console.log(number);
  		}
  	);

  	const myObservable = Observable.create((observer : Observer<string>) => {
  		setTimeout(()=>{
  			observer.next('first package');
  		},2000);
  		setTimeout(() => {
  			observer.next('second package');
  		},4000);
  		setTimeout(() => {
  			//observer.error('complete');
  			observer.complete();
  		},5000);
  		setTimeout(() => {
  			observer.next('third package');
  		},6000);
  	});
  	this.customeObsSubscripation = myObservable.subscribe(
  		(data : string) => {
  			console.log(data);
  		},
  		(error : string) => {
  			console.log(error);
  		},
  		() => {
  			console.log('complete');	
  		}
  	);
  }

  ngOnDestroy() {
  	this.numberObsSubscription.unsubscribe();
  	this.customeObsSubscripation.unsubscribe();
  }

}
