import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { SimpleComponent } from './simple/simple.component';
import {SimpleService} from './simple.service';
import { UserComponent } from './user/user.component';
import {UserService} from './user.service';



@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    UserComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [SimpleService, UserService],
  bootstrap: [AppComponent]
})


export class AppModule { }
