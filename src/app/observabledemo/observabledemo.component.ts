import { Component, OnInit } from '@angular/core';
import { from, observable, Observable, of, pipe, range } from 'rxjs';
import {
  concat,
  concatWith,
  filter,
  map,
  scan,
  startWith,
  take,
} from 'rxjs/operators';

@Component({
  selector: 'app-observabledemo',
  templateUrl: './observabledemo.component.html',
  styleUrls: ['./observabledemo.component.css'],
})
export class ObservabledemoComponent implements OnInit {
  public ob: Observable<any>;
  private observableData: Observable<any>;
  private subscription: any;
  constructor() {}

  ngOnInit() {
    //this.obj = of('Hello','Welcome','Good By','completed');

    this.ob = from(['Hello', 'Welcome', 'Good By', 'completed']);

    //this.ob = range(1, 10);

    //this.ob = this.ob.pipe(take(2)); //Take the number of values

    //this.ob = this.ob.pipe(
    //  startWith('My '),
    //  scan((acc, curr) => `${acc} ${curr}`)
    //);

    // this.ob = from([
    //   { name: 'Suchi', age: 31 },
    //   { name: 'Ganesh', age: 25 },
    //   { name: 'Ravi', age: 34 },
    // ]);
    //this.ob = this.ob.pipe(filter((person) => person.age >= 30));

    console.log('Observable Created!!');
  }

  Subscribe(): void {
    this.subscription = this.ob.subscribe({
      next(value) {
        console.log('Got value from Observable : ' + value.name);
      },
      error(msg) {
        console.log('Got Error : ' + msg);
      },
      complete() {
        console.log('completed!!!');
      },
    });
  }

  UnSubscribe(): void {
    //this.ob.UnSubscribe();
    this.subscription.unsubscribe();
    console.log('UnSubscribed!!');
  }

  ExecuteMapOperator(): void {
    this.observableData = of(1, 2, 4, 6, 8, 10);
    let squareDataResult = this.observableData.pipe(map((p) => (p = p * p)));
    squareDataResult.subscribe((value) =>
      console.log('Square Value :' + value)
    );

    let cubeValueFunction = map((p: number) => p * p * p);
    let cubeValueResult = cubeValueFunction(this.observableData);
    cubeValueResult.subscribe((value) => console.log('cube value :' + value));
  }

  ExecuteFilterOperator(): void {
    let observableData = of(1, 45, 78, 90, 20, 120, 300);
    let resultDataFunction = filter((p: number) => p % 2 == 0);
    let resultData = resultDataFunction(observableData);
    resultData.subscribe((value) => console.log('Even value :' + value));
  }

  ExecutePipeOperator(): void {
    // let observableData = of(1, 45, 78, 90, 20, 120, 300);
    // this.observableData = observableData.pipe(
    //   filter((p) => p > 30),
    //   take(3)
    // );
    // console.log('hit pipe');
    // this.observableData.subscribe({
    //   next(value) {
    //     console.log('value :' + value);
    //   },
    //   error(msg) {
    //     console.log('error ' + msg);
    //   },
    // });

    let employees = [
      { name: 'Ravi', empid: 1, country: 'INDIA', salary: 400000 },
      { name: 'Tony', empid: 1, country: 'US', salary: 300500 },
      { name: 'Joe', empid: 1, country: 'NZ', salary: 450000 },
      { name: 'Rahul', empid: 1, country: 'INDIA', salary: 20000 },
      { name: 'Joseph', empid: 1, country: 'NZ', salary: 10000 },
      { name: 'Sunil', empid: 1, country: 'INDIA', salary: 30000 },
    ];
    //Create Source Observable
    let obj = from(employees);

    let emp_india_func = filter((value: any) => value.country == 'INDIA');
    let emp_NZ_func = filter((value: any) => value.country == 'NZ');
    let emp_US_func = filter((value: any) => value.country == 'US');

    //Create target observable
    let emp_India = emp_india_func(obj);
    let emp_NZ = emp_NZ_func(obj);
    let emp_US = emp_US_func(obj);

    console.log('Indian employees');
    emp_India.subscribe((value) => console.log(value));
    console.log('NZ Employees');
    emp_NZ.subscribe((value) => console.log(value));
    console.log('US Employees');
    emp_US.subscribe((value) => console.log(value));
  }
}
