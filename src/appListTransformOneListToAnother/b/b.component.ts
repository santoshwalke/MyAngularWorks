import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  @Input() list: any;
  @Input() index: number;
  @Output() listClickB = new EventEmitter<{index: number, value: number}> ();

  constructor() { }

  ngOnInit() {
  }

  linkClick(index: number, value: number) {
    this.listClickB.emit({
        index,
        value
    });
  }

}
