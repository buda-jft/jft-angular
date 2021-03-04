import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactusComponent} from './contactus/contactus.component';
const routes: Routes = [
  // this holds all the routes in our project
  {path: "home", component: HomeComponent},
  {path: "contactus", component: ContactusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [HomeComponent, ContactusComponent];