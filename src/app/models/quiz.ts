// export class Quiz {
//   id: number;
//   score: number;
//   numberOfQuestions: number;
//   date_added: string;
//   comments: string;
//
//   constructor() {}
// }
export class Quiz {
  id: number;
  score: number;
  numberOfQuestions: number;
  date_added: Date;
  comments: string;
  total_count: number;

  items: Answer[];

  constructor() {}
}


export class Answer {
  id: number;
  question: number;
  answer: number;
  correct: boolean;
  comments: string;
}
