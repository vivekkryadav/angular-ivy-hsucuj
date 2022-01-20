import { Injectable } from '@angular/core';
import { Feature1Module } from '../feature1.module';
/////////////////////////////////////////////////////
// @Injectable({
//   providedIn: 'root',
// })
//For Service without Injectable, need to provide the service in the providers section of the app module to create root lavel service
// @Injectable({
//   providedIn: 'root',
// })

////////////////////////////////////////////////////////////////
//For Module Level Service
// @Injectable({
//   providedIn: Feature1Module,
// })
export class CounterService {
  private count: number = 0;
  constructor() {}

  Increment(): number {
    return ++this.count;
  }
}
