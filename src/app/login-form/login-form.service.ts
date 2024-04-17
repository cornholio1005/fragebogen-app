import { Injectable } from '@angular/core';
import { LoginFormControllerService } from './login-form-controller.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ParticipantModel } from '../model/participant-model';

@Injectable({
  providedIn: 'root'
})
export class LoginFormService {

  private userIsAuthenticated = false;
  private participant!: ParticipantModel;


  constructor(private loginFormControllerService: LoginFormControllerService) { }

  onLogin(){
    this.userIsAuthenticated = true;
  }

  getPersonByEmailFromDB(email: string): void{
    this.loginFormControllerService.getPersonByEmailFromDB(email).subscribe({
      next:(response: ParticipantModel) => {
        this.participant = response;
        console.log('####Person from DB###'+'\n'+
                    'ID: ' + response.id +'\n'+
                    'Name: ' +response.name +'\n'+
                    'Surname:' +response.surname +'\n'+
                    'email:' +response.email +'\n'+
                    'Password: ' +response.password
        );
      },
      error:(err: HttpErrorResponse) => {
        console.log('ERRORRRR IN SERVICE CLASS')
        console.log(err.message)},
      complete:() => console.log('Complete')
  });
  }



  logout(){
    this.userIsAuthenticated = false;
  }

  getUserIsAuthenticated(){
    return this.getUserIsAuthenticated;
  }
}
