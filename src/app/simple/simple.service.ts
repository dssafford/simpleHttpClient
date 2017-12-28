import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SearchItem} from './searchItem';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
// import {TUNES} from '../data/tunes';


@Injectable()
export class SimpleService {

  constructor(private http: HttpClient) {}

  api = 'https://itunes.apple.com/search?term=Moo&media=music&limit=20';

  getData(): Promise<SearchItem[]> {
    // console.log(Promise.resolve(TUNES);

    // console.log(this.http.get(TUNES)
    //   .map((data: any) => data.results as SearchItem[]));

    // return this.http.get<SearchItem[]>(this.api)
    //   .map((data: any) => data.results as SearchItem[]);

    return null;

  }

  // getAutos(): Promise<Auto[]> {
  //   return Promise.resolve(AUTOS);
  // }

}
