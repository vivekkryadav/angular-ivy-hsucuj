import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-childhooksdemo',
  templateUrl: './childhooksdemo.component.html',
  styleUrls: ['./childhooksdemo.component.css'],
})
export class ChildhooksdemoComponent implements OnInit {
  @Input()
  parentMessageIncoming: string;
  constructor() {}

  ngOnInit() {
    console.log('Child ngOnInit');
    //Called once so used for the initialization of the properties
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log(
  //     'ngOnChanges Previous Value : ' +
  //       changes.parentMessageIncoming.previousValue
  //   );
  //   console.log(
  //     'ngOnChanges New Value : ' + changes.parentMessageIncoming.currentValue
  //   );
  // }
  ngDoCheck() {
    console.log('ngDoCheck');
  }
}
