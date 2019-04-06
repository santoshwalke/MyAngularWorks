import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  loadFeature = "recipes";
  ngOnInit() {
    firebase.initializeApp({
        apiKey: "",
        authDomain: ""
    });
  }
  onNavigate(feature : string) {
  	this.loadFeature = feature;
  }
}
