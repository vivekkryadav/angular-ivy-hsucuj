import { Component } from '@angular/core';
import { CounterService } from '../Services/counter.service';
@Component({
  selector: 'my-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  constructor(private countsvc: CounterService) {}
}
