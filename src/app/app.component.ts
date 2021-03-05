import { Component } from '@angular/core';
import {MyserviceService} from './myservice.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from
'@angular/cdk/drag-drop';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  public persondetails = [];
  constructor(private myService: MyserviceService) {}
  ngOnInit() {
    this.myService.getData().subscribe((data) => {
      this.persondetails = Array.from(Object.keys(data), k=>data[k]);
      console.log(this.persondetails);
    })
  }

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
