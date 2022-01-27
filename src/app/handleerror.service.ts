import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable()
export class HandleerrorService {
  constructor() {}

  private HandleError(error: HttpErrorResponse) {
    let message: String;
    if (error.error instanceof ProgressEvent) {
      message = 'ERROR FROM CLIENT SIDE';
    } else {
      message = 'ERROR FROM SERVER SIDE';
    }
    return throwError(message);
  }
}
