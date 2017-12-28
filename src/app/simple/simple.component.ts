import { Component, OnInit } from '@angular/core';
import 'rxjs/add/observable/of';

import {MatTableDataSource} from '@angular/material';
import {SearchItem} from './searchItem';

const TUNES_DATA: SearchItem[] = [
  {trackName: 'Hydrogen', artistName: 'dude', thumbnail: 'H', link: 'wowser'},
  {trackName: 'Hydrogen', artistName: 'dude', thumbnail: 'H', link: 'wowser'},
  {trackName: 'Hydrogen', artistName: 'dude', thumbnail: 'H', link: 'wowser'},
  {trackName: 'Hydrogen', artistName: 'dude', thumbnail: 'H', link: 'wowser'},
  {trackName: 'Hydrogen', artistName: 'dude', thumbnail: 'H', link: 'wowser'},
];

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {

  // searchItem = new SearchItem();

  displayedColumns = ['trackName', 'artistName', 'thumbnail', 'link'];
  dataSource = new MatTableDataSource<SearchItem>(TUNES_DATA);


  // displayedColumns = ['track', 'artist', 'url', 'collection'];

  constructor() {
  }

  ngOnInit() {
    // console.log(this.simpleService.getData());
  }
}
