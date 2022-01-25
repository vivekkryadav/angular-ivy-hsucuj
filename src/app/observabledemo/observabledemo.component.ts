import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observabledemo',
  templateUrl: './observabledemo.component.html',
  styleUrls: ['./observabledemo.component.css'],
})
export class ObservabledemoComponent implements OnInit {
  public obj: Observable<string>;
  constructor() {}

  ngOnInit() {
    this.obj = new Observable<string>((observer) => {
      console.log('Observable callback called!');
      setTimeout(() => {
        observer.next('Hello Dear!');
      }, 5000);
    });
  }
}
