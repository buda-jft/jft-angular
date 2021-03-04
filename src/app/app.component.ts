import { Component } from '@angular/core';
import {MyserviceService} from './myservice.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  emailid;
  formdata;
  constructor(private myService: MyserviceService) {}
  ngOnInit() {
    this.formdata = new FormGroup({
      emailid: new FormControl("angular@gmail.com"),
      passwd: new FormControl("ancdpass1314"),
    });
  }
  onClickSubmit(data) {
    this.emailid = data.emailid;
  }

}
