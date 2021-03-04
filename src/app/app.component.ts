import { Component } from '@angular/core';
import {MyserviceService} from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  todaydate;
  componentprop;
  constructor(private myService: MyserviceService) {}
  ngOnInit() {
    this.todaydate = this.myService.showDate();
    console.log(this.myService.serviceProp);
    this.myService.serviceProp = "service changed value" // value is changed
    this.componentprop = this.myService.serviceProp;
  }

}
