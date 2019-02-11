import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

@Input() list: any;
@Input() index: number;
@Output() listClickA = new EventEmitter<{index: number, value: number}> ();

constructor() { }
ngOnInit() {
}
listClick(index: number, value: number) {
    this.listClickA.emit({
        index,
        value
    });
}

}
