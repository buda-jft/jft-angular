import { Component } from '@angular/core';
import {MyserviceService} from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  constructor(private myService: MyserviceService) {}
  ngOnInit() {
  }
  onClickSubmit(data) {
    alert("Enter Email id : " + data.emailid);
    alert("Enter password id : " + data.passwd);
  }

}
