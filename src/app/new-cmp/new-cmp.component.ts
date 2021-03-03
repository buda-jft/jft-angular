import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {

  newcoponent = "this is new component here";

  constructor() { }

  ngOnInit() {
    // this is called when the class is executed
  }

}
