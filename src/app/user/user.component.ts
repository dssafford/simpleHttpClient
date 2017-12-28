import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  dataSource = new UserDataSource(this.userService);

  displayedColumns = ['name', 'email', 'phone', 'company'];

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
}

export class UserDataSource extends DataSource<any> {
  constructor(private userService: UserService) {
    super();
  }
  connect(): Observable<User[]> {
    return this.userService.getData();
  }
  disconnect() {}
}
