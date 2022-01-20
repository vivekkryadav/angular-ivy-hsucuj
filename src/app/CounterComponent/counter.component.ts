import { Component } from '@angular/core';
import { CounterService } from '../Services/counter.service';
@Component({
  selector: 'my-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  providers: [CounterService],
})
export class CounterComponent {
  countValue: number = 0;
  constructor(private countsvc: CounterService) {}

  Increment(): void {
    this.countValue = this.countsvc.Increment();
  }
}
