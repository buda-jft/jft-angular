import { Component, OnInit } from '@angular/core';
import {MyserviceService} from './../myservice.service'
@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {
  todaydate;
  newcomponentprop;
  newcoponent = "this is new component here";
  constructor(private myservice: MyserviceService){ }
  ngOnInit() {
    // this is called when the class is executed
    // this.todaydate = this.myservice.showDate();
    // this.newcomponentprop = this.myservice.serviceProp;
  }

}
