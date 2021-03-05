import { Component } from '@angular/core';
import {MyserviceService} from './myservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  public albumdetails = [];
  constructor(private myService: MyserviceService) {}
  ngOnInit() {
    this.myService.getData().subscribe((data) => {
      this.albumdetails = Array.from(Object.keys(data), k=>data[k]);
      console.log(this.albumdetails);
    })
  }
}
