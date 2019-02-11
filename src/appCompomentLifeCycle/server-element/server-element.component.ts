import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ContentChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input() element: {
    type: string,
    name: string,
    content: string
  };
  @ContentChild('para') para: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('on changes called', changes);
  }

  ngOnInit() {
    console.log('on init called');
    console.log('content view in onInit', this.para.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ng do check');
  }

  ngAfterContentInit() {
    console.log('ng after content init');
    console.log('content view after content init', this.para.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ng after content checked');
  }

  ngAfterViewInit() {
    console.log('ng after view init');
  }

  ngAfterViewChecked() {
    console.log('ng after view checked');
  }

  ngOnDestroy() {
      console.log('ng destory');
  }

}
