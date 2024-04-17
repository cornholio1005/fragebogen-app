import { Injectable } from '@angular/core';
import { ParticipantModel } from '..//model/participant-model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsListService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getParticipantsFromDB():Observable<ParticipantModel[]>{
    console.log('########getParticipantsFromDB CONTROLLER#######');
    return this.http.get<any>(`${this.apiServerUrl}/api/v1/participant/get-participants`);
  }



}
