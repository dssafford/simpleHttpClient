import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {GoTest} from './go-test';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

// import {TUNES} from '../data/tunes';


@Injectable()
export class GoTestService {

  constructor(private http: HttpClient) {}

  apiRoot = 'http://localhost:3000';

  // NOTE: since the return is wrapped in a resultcount and results: you must use .results
  // for the return to a SearchItem[]

  getData(): Observable<GoTest[]> {

    return this.http.get<GoTest[]>(this.apiRoot + '/persons')
      .map((data: any) => data.result as GoTest[]);
      // .do(data => console.log(data));

  }

}
