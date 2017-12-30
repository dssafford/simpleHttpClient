import { Component, OnInit } from '@angular/core';
import {GoTestService} from './go-test.service';
import {Observable} from 'rxjs/Observable';
import {DataSource} from '@angular/cdk/collections';
import {GoTest} from './go-test';

@Component({
  selector: 'app-go-test',
  templateUrl: './go-test.component.html',
  styleUrls: ['./go-test.component.css']
})
export class GoTestComponent implements OnInit {

  displayedColumns = ['id', 'first_name', 'last_name'];

  dataSource: UserDataSource;

  constructor(private goTestService: GoTestService) { }


  getData() {
    this.dataSource = new UserDataSource(this.goTestService);
    return this.goTestService.getData();
  }

  ngOnInit() {
    this.getData();
  }

}

export class UserDataSource extends DataSource<any> {
  constructor(private goTestService: GoTestService) {
    super();
  }
  connect(): Observable<GoTest[]> {
    return this.goTestService.getData();
  }
  disconnect() {}
}
