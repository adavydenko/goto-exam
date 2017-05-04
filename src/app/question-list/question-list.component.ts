import { Component, OnInit } from '@angular/core';

import { Question } from "./../models";
import { QuestionService } from "./../services";

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  private questions: Question[] = [];

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    console.log('QuestionListComponent: loaded');

    this.questionService.getQuestions()
      .subscribe(
        questions => {
          this.questions = questions
        },
        err => {
          console.log(err);
          alert(err);
        }
      );
  }

}
