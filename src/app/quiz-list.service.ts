import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ResultEntry} from './models/ResultEntry';
import {Answer, Quiz} from './models/quiz';


@Injectable()
export class QuizListService {

  api = 'http://localhost:8004/api/QuizList';
  newapi = 'http://localhost:8004/api/Quiz';

  quiz: Quiz;
  newAnswers:  Answer[];
  currentAnswer: Answer;
  currentAnswer1: Answer;
  mystr: string;

  constructor(private http: HttpClient) {
  }

  getQuizList(): Observable<ResultEntry[]> {
    console.log('list below');

    // debugger
    console.log(this.http.get('http://localhost:8004/api/QuizList').toPromise());

    return (this.http.get<ResultEntry[]>(this.api));

  }

  simplePostQuiz(): Promise <Quiz>  {

    this.quiz = new Quiz();
    this.quiz.numberOfQuestions = 2;
    this.quiz.score = 95;
    this.quiz.date_added = '2018-01-11';
    this.quiz.comments = 'simple comments here';


    this.currentAnswer  = new Answer();
    // this.currentAnswer.id = 0;
    this.currentAnswer.question = 1;
    this.currentAnswer.answer = 1;
    this.currentAnswer.correct = true;
    this.currentAnswer.comments = 'answer comments';

    this.currentAnswer1  = new Answer();
    // this.currentAnswer1.id = 0;
    this.currentAnswer1.question = 1;
    this.currentAnswer1.answer = 1;
    this.currentAnswer1.correct = true;
    this.currentAnswer1.comments = 'answer comments';

    // Create Answers Array
    this.newAnswers = new Array < Answer >();
    this.newAnswers[0] = this.currentAnswer;
    this.newAnswers[1] = this.currentAnswer1;

    this.quiz.answers =  new Array < Answer >();

    this.quiz.answers.push(this.currentAnswer);
    this.quiz.answers.push(this.currentAnswer1);
    this.mystr = JSON.stringify(this.quiz);
    console.log(this.mystr);

    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

    return this.http.post(this.newapi, this.quiz, {headers: headers})
      .toPromise()
      .then(response => response as Quiz);


  }
}
