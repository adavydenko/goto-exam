import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";

import { Question } from "./../models";

@Injectable()
export class QuestionService {

  private apiUrl = 'http://localhost:3000/questions/';

  constructor(private http: Http) { }

  getQuestions(): Observable<Question[]> {
    return this.http.get(this.apiUrl)
      .map ( (data: Response) => data.json() )
      .catch( (err:any) => Observable.throw(err.json().error || 'Server error') );
  }

}
