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
  MatButtonModule, MatButtonToggleModule, MatError, MatIconModule, MatMenuModule, MatSortModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';
import { SimpleTableComponent } from './simple-table/simple-table.component';
import {DemoMaterialModule} from './demo-material-module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { GoTestComponent } from './go-test/go-test.component';
import {GoTestService} from './go-test/go-test.service';




@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    UserComponent,
    SimpleTableComponent,
    GoTestComponent,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, HttpClientModule, MatButtonModule,
    MatButtonToggleModule, MatMenuModule, MatIconModule, MatToolbarModule, MatTableModule, MatSortModule,
    DemoMaterialModule, ReactiveFormsModule, FormsModule
  ],
  providers: [SimpleService, UserService, GoTestService],
  bootstrap: [AppComponent]
})


export class AppModule { }
