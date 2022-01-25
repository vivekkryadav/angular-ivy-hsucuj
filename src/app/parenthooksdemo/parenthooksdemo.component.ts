import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parenthooksdemo',
  templateUrl: './parenthooksdemo.component.html',
  styleUrls: ['./parenthooksdemo.component.css'],
})
export class ParenthooksdemoComponent implements OnInit {
  firstname: string = 'hello';
  constructor() {}
  ngOnInit() {
    //console.log('Parent ngOnInit');
  }
}
