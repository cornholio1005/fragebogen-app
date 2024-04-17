import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ParticipantModel } from '../model/participant-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupControllerService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public registerParticipantInDB(newParticipant: ParticipantModel): Observable<ParticipantModel>{
    console.log("#####NewParticipant####"+newParticipant);
    return this.http.post<ParticipantModel>(`${this.apiServerUrl}/api/v1/participant/register-new-participant`, newParticipant);
  }
}
