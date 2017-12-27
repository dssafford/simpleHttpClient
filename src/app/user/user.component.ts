import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  craps: User[];

  constructor(private userService: UserService) { }

  getMyData() {
    // this.userService.getData().then(data => this.craps = data);
    console.log(this.userService.getData());
    // .subscribe(data => this.users = data);
    // this.simpleService.getData()
    //   .subscribe(data => this.users = data);

    this.userService.getData().then(craps => this.craps = craps);
  }


  ngOnInit() {

    this.getMyData();

  }
}
