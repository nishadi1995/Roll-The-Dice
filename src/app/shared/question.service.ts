import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Question {
  question : string,
  options : string[],
  answer : string
}

@Injectable()
export class QuestionService {

  constructor(private http : HttpClient) { }

  configUrl = 'assets/database/qtn.json';


  getQuestion(){
    return this.http.get<Question>(this.configUrl);   
  }

}
