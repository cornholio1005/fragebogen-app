import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { QuestionModel } from '../model/question-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionListService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getQuestionsFromDB():Observable<QuestionModel[]>{
    console.log('########getQuestionsFromDB CONTROLLER#######');
    return this.http.get<any>(`${this.apiServerUrl}/api/v1/question/get-questions`);
  }
}
