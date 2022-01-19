import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'my-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  ///////////////Parent to Child/////////////////////
  @Input()
  parentMessage: string;
  //////////////////////////////////////////////////
  nameChild: string = 'Child Component for Input Decorator';
  constructor() {}

  ///////////////Chid to Parent/////////////////////

  ////////////////////////////////////
}
