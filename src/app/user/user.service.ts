import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

  // user: User[];

  api = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getData(): Observable<User[]> {
    console.log(this.http.get(this.api).toPromise());
    return(this.http.get<User[]>(this.api));
  }
}
