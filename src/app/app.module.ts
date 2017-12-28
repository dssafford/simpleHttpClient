import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { SimpleComponent } from './simple/simple.component';
import {SimpleService} from './simple/simple.service';
import { UserComponent } from './user/user.component';
import {UserService} from './user/user.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatIconModule, MatMenuModule, MatSortModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    UserComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, HttpClientModule, MatButtonModule,
    MatMenuModule, MatIconModule, MatToolbarModule, MatTableModule, MatSortModule
  ],
  providers: [SimpleService, UserService],
  bootstrap: [AppComponent]
})


export class AppModule { }
