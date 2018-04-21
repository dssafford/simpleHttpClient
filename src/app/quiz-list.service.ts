import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ResultEntry} from './models/ResultEntry';
import {Answer, Quiz} from './models/quiz';


@Injectable()
export class QuizListService {

  api = 'http://localhost:8004/api/QuizList';

  quiz: Quiz;
  quiz1: Quiz;

  myQuizzes: Quiz[] = [];

  mystr: string;

  constructor(private http: HttpClient) {
  }

  getQuizList(): Observable<Quiz[]> {
    console.log('list below');


    // console.log(this.http.get('http://localhost:8004/api/QuizList').toPromise());

    // this.http.get<Quiz[]>('http://localhost:8004/api/QuizList').
    //   subscribe(quizzes => this.myQuizzes = quizzes);

    // console.log(this.myQuizzes.toString());

    return (this.http.get<Quiz[]>(this.api));

  }
  getData(): Observable<Quiz[]> {
    // const apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
    return this.http.get<Quiz[]>('http://localhost:8004/api/QuizList')
      .map((data: any) => data as Quiz[]);

  }
  eatshit() {
    // this.countryService.getCountries().subscribe(countries => this.countries = countries);
    return this.http.get(this.api)
      .map((response: Response) => response.json())
      .do(data => console.log('All' + JSON.stringify(data)));
  }

  simplePostQuiz(): Quiz[] {

    this.quiz = new Quiz();
    this.quiz.numberOfQuestions = 2;
    this.quiz.score = 95;
    this.quiz.date_added = new Date();
    this.quiz.comments = 'simple comments here';

    this.myQuizzes.push(this.quiz);

    this.quiz1 = new Quiz();
    this.quiz1.numberOfQuestions = 2;
    this.quiz1.score = 95;
    this.quiz1.date_added = new Date();
    this.quiz1.comments = 'simple comments here';

    this.myQuizzes.push(this.quiz1);


    // this.currentAnswer  = new Answer();
    // // this.currentAnswer.id = 0;
    // this.currentAnswer.question = 1;
    // this.currentAnswer.answer = 1;
    // this.currentAnswer.correct = true;
    // this.currentAnswer.comments = 'answer comments';
    //
    // this.currentAnswer1  = new Answer();
    // // this.currentAnswer1.id = 0;
    // this.currentAnswer1.question = 1;
    // this.currentAnswer1.answer = 1;
    // this.currentAnswer1.correct = true;
    // this.currentAnswer1.comments = 'answer comments';
    //
    // // Create Answers Array
    // this.newAnswers = new Array < Answer >();
    // this.newAnswers[0] = this.currentAnswer;
    // this.newAnswers[1] = this.currentAnswer1;
    //
    // this.quiz.answers =  new Array < Answer >();
    //
    // this.quiz.answers.push(this.currentAnswer);
    // this.quiz.answers.push(this.currentAnswer1);
    this.mystr = JSON.stringify(this.quiz);
    console.log(this.mystr);

    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

    return this.myQuizzes;

    // return this.http.post(this.newapi, this.quiz, {headers: headers})
    //   .toPromise()
    //   .then(response => response as Quiz);


  }
}
