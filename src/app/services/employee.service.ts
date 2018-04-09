import {Injectable, OnInit} from '@angular/core';
import {Employee} from '../models/employee';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';




@Injectable()
export class EmployeeService {

  // getEmployees(): Promise<Employee[]> {
  //   return Promise.resolve(this.data);
  // }

  api = 'http://localhost:8003/api/EmployeeList';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {



    console.log("list below");

    console.log(this.http.get(this.api).toPromise());

    return(this.http.get<Employee[]>(this.api));

    // this.http.get('http://localhost:8003/api/EmployeeList').do((data: any) => console.log(data));

    // return this.http.get('http://localhost:8003/api/EmployeeList')
    //   .map((data: any) => data.result as Employee[])
    //   .do(data => console.log(data));

    // return this.http.get<Employee[]>(this.api)
    //   .map((data: any) => data as Employee[])
    //   .do(data => console.log(data));

  }

  // getEmployee(id: number): Promise<Employee> {
  //   return Promise.resolve(this.data).then(
  //     employees => employees.filter(employee => employee.id === id)[0]
  //   );
  // }
  //
  // addEmployee(employee: Employee): Promise<number> {
  //   const today = new Date();
  //   const month = today.getMonth() + 1;
  //   const date = today.getDate();
  //   const year = today.getFullYear();
  //
  //   if (!employee.id) {
  //     employee.id = this.NEW_ID++;
  //   }
  //
  //   if (!employee.createDate) {
  //     employee.createDate = month + '/' + date + '/' + year;
  //   }
  //
  //   return Promise.resolve(this.data).then(employees => employees.push(employee));
  // }
  //
  // removeEmployee(employee: Employee): Promise<Employee[]> {
  //   const index = this.data.indexOf(employee);
  //   return Promise.resolve(this.data)
  //     .then(employees => employees.splice(index, 1));
  // }
}
