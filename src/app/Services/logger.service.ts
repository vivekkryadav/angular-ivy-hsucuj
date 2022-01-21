import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
export class LoggerService {
  constructor() {
    console.log('********Logger Service Instance Created!');
  }

  Log(): void {
    console.log('Logger service is hit');
  }
}
