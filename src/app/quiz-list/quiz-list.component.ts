import { Component, OnInit } from '@angular/core';
import {QuizListService} from '../quiz-list.service';
import {Observable} from 'rxjs/Observable';
import {ResultEntry} from '../models/ResultEntry';
import {Answer, Quiz} from '../models/quiz';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  title = 'Quiz List Directory';

  quizzes: ResultEntry[];
  api = 'http://localhost:8004/api/QuizList';
  newapi = 'http://localhost:8004/api/Quiz';


  quiz: Quiz;
  newAnswers:  Answer[];
  currentAnswer: Answer;
  currentAnswer1: Answer;
  mystr: string;

  // displayedColumns = ['id', 'question', 'answer', 'correct'];
  //
  //
  // dataSource = new QuizDataSource(this.quizlistService);
  //

  constructor(private quizlistService: QuizListService) { }

  ngOnInit() {
    this.quizlistService.simplePostQuiz();

    // debugger
    // console.log('in in QuizList');
    // this.quiz = new Quiz();
    // this.quiz.numberOfQuestions = 2;
    // this.quiz.score = 95;
    // this.quiz.date_added = '2018-01-11';
    // this.quiz.comments = 'simple comments here';
    //
    //
    // this.currentAnswer  = new Answer();
    // this.currentAnswer.id = 0;
    // this.currentAnswer.question = 1;
    // this.currentAnswer.answer = 1;
    // this.currentAnswer.correct = true;
    // this.currentAnswer.comments = 'answer comments';
    //
    // this.currentAnswer1  = new Answer();
    // this.currentAnswer1.id = 0;
    // this.currentAnswer1.question = 1;
    // this.currentAnswer1.answer = 1;
    // this.currentAnswer1.correct = true;
    // this.currentAnswer1.comments = 'answer comments';
    //
    // // Create Answers Array
    // this.newAnswers = new Array < Answer >();
    // this.newAnswers[0] = this.currentAnswer;
    // this.newAnswers[0] = this.currentAnswer;
    //
    // this.quiz.answers =  new Array < Answer >();
    //
    // this.quiz.answers.push(this.currentAnswer);
    // this.quiz.answers.push(this.currentAnswer1);
    // // this.mystr = JSON.stringify(this.quiz);
    // // console.log(this.mystr);
    //
    // const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    //
    // this.http.post(this.newapi, this.quiz,
    //   {headers: headers});

  }

  // getQuizzes(): Observable<ResultEntry[]> {
  //
  //   return this.quizlistService.getQuizList();
  //
  // }




    // .toPromise()
    // .then(response => response as Quiz);


    // this.http .post(this.shopUrl, shopcreate, {headers: this.headers})





    // this.changeAnswerArray();

    // this.show = true;

    // this.dataSource = new ResultsDataSource(this.newAnswers);

}
// export class QuizDataSource extends DataSource<any> {
//   constructor(private quizListService: QuizListService) {
//     super();
//   }
//   connect(): Observable<ResultEntry[]> {
//     return this.quizListService.getQuizList();
//   }
//   disconnect() {}
//
// }
