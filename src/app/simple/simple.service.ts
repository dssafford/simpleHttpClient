import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SearchItem} from './searchItem';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
// import {TUNES} from '../data/tunes';


@Injectable()
export class SimpleService {

  constructor(private http: HttpClient) {}

  // api = 'https://itunes.apple.com/search?term=Moo&media=music&limit=20';
  apiRoot = 'https://itunes.apple.com/search';

  // NOTE: since the return is wrapped in a resultcount and results: you must use .results
  // for the return to a SearchItem[]
  getData(term: string): Observable<SearchItem[]> {
    const apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
    return this.http.get<SearchItem[]>(apiURL)
      .map((data: any) => data.results as SearchItem[]);

  }

}
