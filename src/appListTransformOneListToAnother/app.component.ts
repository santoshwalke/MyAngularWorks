import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';

  arrA = [1, 2, 3, 4, 5];
  arrB = [];

  linkAClik(index: number, value: number) {
    this.arrA.splice(index, 1);
    this.arrB.push(value);
  }

  linkBClick(index: number, value: number) {
      this.arrB.splice(index, 1);
      this.arrA.push(value);
  }
}
