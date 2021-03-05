import { Component } from "@angular/core";
import { MyserviceService } from "./myservice.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";
// import {CdkDragDrop, moveItemInArray, transferArrayItem} from
// '@angular/cdk/drag-drop';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  // styles: [
  //   `
  // div{
  //   margin: 0atuo;
  //   text-align; center;
  //   width:200px;
  // }
  // .rotate{
  //   width:100px;
  //   height:100px;
  //   border:solid 1px red;  
  // }
  // `,
  // ],
  // animations: [
  //   trigger("myanimation", [
  //     state(
  //       "smaller",
  //       style({
  //         transform: "translateY(100px)",
  //       })
  //     ),
  //     state(
  //       "larger",
  //       style({
  //         transform: "translateY(0px)",
  //       })
  //     ),
  //     transition("smaller <=> larger", animate("300ms ease-in")),
  //   ]),
  // ],
})
export class AppComponent {
  state: string = "smaller";
  animate() {
    this.state = this.state == 'larger' ? 'smaller' : 'larger';
  }
}
