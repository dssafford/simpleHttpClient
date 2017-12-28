import {Component, OnInit} from '@angular/core';
import 'rxjs/add/observable/of';
import {ErrorStateMatcher} from '@angular/material/core';
import {SearchItem} from './searchItem';
import {SimpleService} from './simple.service';
import {Observable} from 'rxjs/Observable';
import {DataSource} from '@angular/cdk/collections';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

const TUNES_DATA: SearchItem[] = {
  'resultCount': 20,
  'results': [
    {
        {trackName: 'Hydrogen', artistName: 'dude', thumbnail: 'H', link: 'wowser'},
        {trackName: 'Hydrogen', artistName: 'dude', thumbnail: 'H', link: 'wowser'},
        {trackName: 'Hydrogen', artistName: 'dasd', thumbnail: 'H', link: 'wowser'},
        {trackName: 'Hydrogen', artistName: 'dude', thumbnail: 'H', link: 'wowser'},
        {trackName: 'Hydrogen', artistName: 'dude', thumbnail: 'H', link: 'wowser'}
  ]
};

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {

  // searchItem = new SearchItem();

  displayedColumns = ['trackName', 'artistName', 'thumbnail', 'link'];
  // dataSource = new MatTableDataSource<SearchItem>(TUNES_DATA.results);

  dataSource: UserDataSource;


  constructor(private simpleService: SimpleService) { }

  // displayedColumns = ['track', 'artist', 'url', 'collection'];

  getData(term: string) {
    this.dataSource = new UserDataSource(this.simpleService, term);
    return this.simpleService.getData(term);
  }

  ngOnInit() {
    // console.log(this.simpleService.getData());
  }
}
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export class InputErrorStateMatcherExample {
  textFormControl = new FormControl('', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();
}

export class UserDataSource extends DataSource<any> {
    constructor(private simpleService: SimpleService, private term: string) {
      super();
    }
    connect(): Observable<SearchItem[]> {
      return this.simpleService.getData(this.term);
  }
    disconnect() {}
}
