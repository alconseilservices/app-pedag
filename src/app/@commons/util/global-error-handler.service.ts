import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class GlobalErrorHandlerService extends ErrorHandler {

  constructor(private injector: Injector) {
    super();
  }

  handleError(error) {
    throw error;
 }
}
