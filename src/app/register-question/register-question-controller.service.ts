import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { QuestionModel } from '../model/question-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterQuestionControllerService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public registerQuestionInDB(newQuestion: QuestionModel): Observable<QuestionModel>{
    console.log("#####NewQuestion####"+newQuestion);
    return this.http.post<QuestionModel>(`${this.apiServerUrl}/api/v1/question/register-new-question`, newQuestion);
  }

}
