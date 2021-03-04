import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { ChangeTextDirective } from './change-text.directive';
import { SqrtPipe } from "./app.sqrt";
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MyserviceService } from './myservice.service';
import { HttpClientModule } from '@angular/common/http';
// import { ScrollDispatchModule } from '@angular/cdk/scrolling';
// import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    SqrtPipe,
    AppComponent,
    NewCmpComponent,
    ChangeTextDirective,
    HomeComponent,
    ContactusComponent,
    RoutingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // ScrollDispatchModule,
    // DragDropModule,
    FormsModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
