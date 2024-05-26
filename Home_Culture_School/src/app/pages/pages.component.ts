import { Component, OnInit } from '@angular/core';

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  currentQuestion: Question;
  userAnswer: string;
  feedbackMessage: string;

  constructor() {
    this.currentQuestion = this.generateQuestion();
    this.userAnswer = '';
    this.feedbackMessage = '';
  }

  ngOnInit(): void {
  }

  generateQuestion(): Question {
    // Exemplo de pergunta de múltipla escolha
    return {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: "Paris"
    };
  }

  checkAnswer(): void {
    if (this.userAnswer === this.currentQuestion.correctAnswer) {
      this.feedbackMessage = "Correct!";
    } else {
      this.feedbackMessage = "Incorrect. The correct answer is " + this.currentQuestion.correctAnswer;
    }
  }
}
