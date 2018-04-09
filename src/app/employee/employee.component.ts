import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/employee';
import {EmployeeService} from '../services/employee.service';
import {Observable} from 'rxjs/Observable';
import {SearchItem} from '../simple/searchItem';
import {DataSource} from '@angular/cdk/collections';
import {SimpleService} from '../simple/simple.service';
import {UserDataSource} from '../simple/simple.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  title = 'Employee Directory';
  employees: Employee[];

  displayedColumns = ['firstName', 'lastName', 'email', 'phone'];


  dataSource = new EmployeeDataSource(this.employeeService);


  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.employeeService.getEmployees();
  }

  getEmployees(): Observable<Employee[]> {

    return this.employeeService.getEmployees();

  }
}
  export class EmployeeDataSource extends DataSource<any> {
    constructor(private employeeService: EmployeeService) {
      super();
    }
    connect(): Observable<Employee[]> {
      return this.employeeService.getEmployees();
  }
    disconnect() {}

}
