import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SearchItem} from './simple/searchItem';
import 'rxjs/add/operator/map';


@Injectable()
export class SimpleService {

  constructor(private http: HttpClient){}

  api = 'https://itunes.apple.com/search?term=Moo&media=music&limit=20';

  getData(): Promise<SearchItem[]> {
    //WORKS TO VERIFY console.log(this.http.get(this.api).toPromise());
    return(this.http.get<SearchItem[]>(this.api).toPromise());
  }
}
