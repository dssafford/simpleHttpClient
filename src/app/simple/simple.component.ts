import { Component, OnInit } from '@angular/core';
import {SimpleService} from '../simple.service';
import {SearchItem} from './searchItem';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {
  craps: SearchItem[];
  title = 'Json with results are wrapped';

  constructor(private simpleService: SimpleService) { }


  getMyData() {
    console.log(this.simpleService.getData());

    this.simpleService.getData().then(data => this.craps = data);
  }


  ngOnInit() {

    this.getMyData();

  }

}
