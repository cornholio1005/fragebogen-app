import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ParticipantModel } from '../model/participant-model';

@Injectable({
  providedIn: 'root'
})
export class LoginFormControllerService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getPersonByEmailFromDB(email: string): Observable<ParticipantModel>{
    console.log('########getPersonByEmailFromDB CONTROLLER#######');
    return this.http.get<any>(`${this.apiServerUrl}/api/v1/participant/get-participant-by-email/${email}`);
  }


}
