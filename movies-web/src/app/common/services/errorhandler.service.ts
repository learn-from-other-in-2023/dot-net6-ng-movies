import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorhandlerService {

  errorEvent = new Subject<string>();
  
  errorEvent$ = this.errorEvent.asObservable();

  constructor() { }

  handleError(error: any) {
    console.log('Error occured at ErrorhandlerService::handleError(). Error: ', error);
    
    this.errorEvent.next(error);
  }

}
