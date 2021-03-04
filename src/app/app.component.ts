import { Component } from '@angular/core';
// import {MyserviceService} from './myservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  todaydate;
  componentprop;
  emailid;
  formdata;
  // constructor(private myService: MyserviceService) {}
  ngOnInit() {
    this.formdata = new FormGroup({
      // compose can add list of methods
      emailid: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])),
      passwd: new FormControl("", this.passwordvalidation)
    });
  }
  passwordvalidation(formcontrol) {
    // if this returns true than it will allow the validation
    if (formcontrol.value.length < 5) {
      return {"passwd": true};
    }
  }
  onClickSubmit(data) {
    this.emailid = data.emailid;
  }

}
