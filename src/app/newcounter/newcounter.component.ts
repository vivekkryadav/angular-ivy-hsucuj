import { Component, OnInit } from '@angular/core';
import { CounterService } from '../Services/counter.service';

@Component({
  selector: 'app-newcounter',
  templateUrl: './newcounter.component.html',
  styleUrls: ['./newcounter.component.css'],
  providers: [CounterService],
})
export class NewcounterComponent implements OnInit {
  countValue: number = 0;
  newcounterName: string = 'New Counter Component';
  constructor(private svccounter: CounterService) {}

  ngOnInit() {}

  Increment(): void {
    this.countValue = this.svccounter.Increment();
  }
}
