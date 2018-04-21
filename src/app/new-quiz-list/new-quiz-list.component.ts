import {Component, AfterViewInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {merge} from 'rxjs/observable/merge';
import {of as observableOf} from 'rxjs/observable/of';
import {catchError} from 'rxjs/operators/catchError';
import {map} from 'rxjs/operators/map';
import {startWith} from 'rxjs/operators/startWith';
import {switchMap} from 'rxjs/operators/switchMap';
import {Quiz} from '../models/quiz';
import {SearchItem} from '../simple/searchItem';

/**
 * @title Table retrieving data through HTTP
 */
@Component({
  selector: 'app-new-quiz-list',
  styleUrls: ['new-quiz-list.component.css'],
  templateUrl: 'new-quiz-list.component.html',
})
export class NewQuizListComponent implements AfterViewInit {
  // displayedColumns = ['created', 'state', 'number', 'title'];
  displayedColumns = ['id', 'numberOfQuestions', 'score', 'comments'];

  // exampleDatabase: ExampleHttpDao | null;
  dataSource = new MatTableDataSource();

  resultsLength = 0;
  isLoadingResults = false;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient) {
  }

  ngAfterViewInit() {
    // this.exampleDatabase = new ExampleHttpDao(this.http);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.getData();
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = 5; //data.total_count;
          return data;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => this.dataSource.data = data);
  }

  getData(): Observable<Quiz[]> {
    // const apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
    return this.http.get<Quiz[]>('http://localhost:8004/api/QuizList')
      .map((data: any) => data as Quiz[]);

  }

  getQuizListData(sort: string, order: string, page: number): Observable<Quiz> {
    const href = 'http://localhost:8004/api/QuizList';
    // console.log(this.http.get<Quiz>(href).toPromise());
    return this.http.get<Quiz>(href);
  }
  quizListData(): Observable<Quiz> {
    const href = 'http://localhost:8004/api/QuizList';
    // console.log(this.http.get<Quiz>(href).toPromise());
    return this.http.get<Quiz>(href);
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

/** An example database that the data source uses to retrieve data for the table. */


/**  Copyright 2018 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license */
