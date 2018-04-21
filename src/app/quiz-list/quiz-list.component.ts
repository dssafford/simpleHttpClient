import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {QuizListService} from '../quiz-list.service';
import {ResultEntry} from '../models/ResultEntry';
import {Answer, Quiz} from '../models/quiz';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit, AfterViewInit {

  title = 'Quiz List Directory';

  quizzes: Quiz[];
  quizArray: Quiz[];
  quizObservable: Observable<Quiz[]>;
  api = 'http://localhost:8004/api/QuizList';
  newapi = 'http://localhost:8004/api/Quiz';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['id', 'numberOfQuestions', 'score', 'comments'];

  constructor(private http: HttpClient, private quizListService: QuizListService) {}
  dataSource = new MatTableDataSource();

  ngOnInit(): void {
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    this.GetQuizList();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  GetQuizList() {
    this.quizListService.getData()
      .subscribe( data => {
          // Set the dataSource here
          this.dataSource = new MatTableDataSource(data);
        },
        error => console.log('GetControls Method: ' + <any>error, 'alert alert-danger'));
  }

}
