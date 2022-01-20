import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
export class LoggerService {
  constructor() {}

  Log(): void {
    console.log('Logger service is hit!');
  }
}
