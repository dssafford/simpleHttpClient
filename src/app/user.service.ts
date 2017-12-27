import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';

@Injectable()
export class UserService {

  // user: User[];

  api = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }

  getData(): Promise<User[]> {
    console.log(this.http.get(this.api).toPromise());
    return(this.http.get<User[]>(this.api).toPromise());
  }
}
