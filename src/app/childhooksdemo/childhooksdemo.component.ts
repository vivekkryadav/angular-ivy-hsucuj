import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-childhooksdemo',
  templateUrl: './childhooksdemo.component.html',
  styleUrls: ['./childhooksdemo.component.css'],
})
export class ChildhooksdemoComponent implements OnInit {
  @Input()
  parentMessageIncoming: string;
  flag: any = 1;
  @ContentChild('contactchild') content: ElementRef;
  @ViewChild('newmessage') newMessage: any;

  constructor() {}
  ngOnInit() {
    //  console.log('Child ngOnInit');
    //Called once so used for the initialization of the properties
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(
      'ngOnChanges : ' +
        changes.parentMessageIncoming.previousValue +
        ' ' +
        changes.parentMessageIncoming.currentValue +
        this.flag
    );
    if (changes.parentMessageIncoming.previousValue == undefined) {
      this.flag = 0;
    } else {
      this.flag = 1;
    }
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
  //ngDoCheck() {
  //ngDoCheck is called for those properties or onject, which angular cannot detect the change
  //impure object change   eg. emp.age changed in parent instead of changing the emp reference
  //Do not take input as changes : SimpleChanges
  // console.log('ngDoCheck triggered');
  //}
  ngAfterContentInit() {
    console.log('ngAfterContentInit triggered ' + this.flag);
  }
  // ngAfterContentChecked() {
  //   console.log('ngAfterContentChecked triggered');
  // }

  ngAfterViewInit() {
    console.log('ngAfterViewInit triggered ');
    this.content.nativeElement.style.backgroundColor = 'Red';
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked triggered : ' + this.flag);
    if (this.flag == 0)
      this.content.nativeElement.style.backgroundColor = 'Yellow';
    else {
      this.content.nativeElement.style.backgroundColor = 'red';
    }
  }
}
