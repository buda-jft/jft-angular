import { Component } from '@angular/core';
import {MyserviceService} from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  public persondata = [];
  constructor(private myService: MyserviceService) {}
  ngOnInit() {//                |
    //                   what ? v
    this.myService.getData().subscribe((data) => {
      // not clear about this
      this.persondata = Array.from(Object.keys(data), k=>data[k]);
      console.log(this.persondata);
    });
  }

}
