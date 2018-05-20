import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

export interface question {
  question : string,
  options : string[],
  answer : string
}

@Injectable()
export class QuestionService {

  constructor(private http : HttpClient) { }

  configUrl = 'assets/database/qtn.json';
  public correctAnswer : boolean = false;

  getQuestion(){
    return this.http.get(this.configUrl);   
  }

}
