import { Component, OnInit } from '@angular/core';
import { CounterService } from '../Services/counter.service';

@Component({
  selector: 'app-newcounter',
  templateUrl: './newcounter.component.html',
  styleUrls: ['./newcounter.component.css'],
})
export class NewcounterComponent implements OnInit {
  constructor(private svccounter: CounterService) {}

  ngOnInit() {}
}
