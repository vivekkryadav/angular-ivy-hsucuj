import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'my-child-outputemitter',
  templateUrl: './outputemitterchild.component.html',
  styleUrls: ['./outputemitterchild.component.css'],
})
export class OutputEmitterChildComponent {
  nameOutputChild: string = 'Output Decorator with Emitter';

  @Output()
  childMessageToparent: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  CatchEmitDateToParent(eventMessage): void {
    //console.log(eventMessage);
    this.childMessageToparent.emit(eventMessage);
  }
}
