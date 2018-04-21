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
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EmployeeComponent } from './employee/employee.component';
import {EmployeeService} from './services/employee.service';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import {QuizListService} from './quiz-list.service';
import { TableHttpExampleFullComponent } from './table-http-example-full/table-http-example-full.component';
import { NewQuizListComponent } from './new-quiz-list/new-quiz-list.component';



@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    UserComponent,
    SimpleTableComponent,
    GoTestComponent,
    EmployeeComponent,
    QuizListComponent,
    TableHttpExampleFullComponent,
    NewQuizListComponent,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, HttpClientModule, MatButtonModule,
    MatButtonToggleModule, MatMenuModule, MatIconModule, MatToolbarModule, MatTableModule, MatSortModule,
    DemoMaterialModule, ReactiveFormsModule, FormsModule
  ],
  providers: [SimpleService, UserService, GoTestService, EmployeeService, QuizListService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})


export class AppModule { }
