import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  serviceProp = "service created";
  constructor() { }
  showDate() {
    let today = new Date();
    return today;
  }
}
