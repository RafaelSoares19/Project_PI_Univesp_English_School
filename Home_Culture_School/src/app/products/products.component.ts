import { Component, OnInit } from '@angular/core';

interface Question {
  sentence: string;
  answer: string;
}

interface UserData {
  currentQuestionIndex: number;
  answers: Question[];
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  questions: Question[] = [];
  currentQuestionIndex: number = 0;
  userAnswer: string = '';
  feedbackMessage: string = '';

  constructor() {
    this.questions = this.generateQuestions();
    const storedIndex = localStorage.getItem('currentQuestionIndex');
    if (storedIndex !== null) {
      this.currentQuestionIndex = +storedIndex;
    }
    const storedAnswer = localStorage.getItem('userAnswer');
    const storedAnswers = localStorage.getItem('userAnswers');
    if (storedAnswers !== null) {
      const userData: UserData = JSON.parse(storedAnswers);
      this.currentQuestionIndex = userData.currentQuestionIndex;
      this.questions = userData.answers;
    }

    if (storedAnswer !== null) {
      this.userAnswer = storedAnswer;
    }
  }

  ngOnInit(): void { }

  generateQuestions(): Question[] {
    return [
      { sentence: "A: Hi, Min. (What's) up? B: Not much.", answer: "What's" },
      { sentence: "A: (Hey), Maria. B: Oh, hi, jordan.", answer: "Hey" },
      { sentence: "A: Hey, Emma (How) are you? B: Things are good. Thanks.", answer: "How" },
      { sentence: "A: Hi, Mrs. Chen. B: (Good) morning, Sofia.", answer: "Good" },
      { sentence: "A: I'm late for class. B: OK. See you (later).", answer: "later" },
      { sentence: "A: Bye, Tom. Talk to you later. B: ok", answer: "Talk" },
      { sentence: "A: See you tomorrow, OK George? B: Sure. Good (night), Mark.", answer: "night" }
    ];
  }

  checkAnswer(): void {
    if (this.userAnswer === this.questions[this.currentQuestionIndex].answer) {
      this.feedbackMessage = "Correct!";
    } else {
      this.feedbackMessage = "Incorrect. The correct answer is " + this.questions[this.currentQuestionIndex].answer;
    }
  }

  nextQuestion(): void {
    this.currentQuestionIndex++;
    localStorage.setItem('currentQuestionIndex', this.currentQuestionIndex.toString());
    localStorage.setItem('userAnswer', this.userAnswer);
    const userData: UserData = { currentQuestionIndex: this.currentQuestionIndex, answers: this.questions };
    localStorage.setItem('userAnswers', JSON.stringify(userData));
    this.userAnswer = '';
    this.feedbackMessage = '';
  }
}
