import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ParticipantModel } from '../model/participant-model';
import { SignupControllerService } from './signup-controller.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupFormService {

  constructor(private signupControllerService: SignupControllerService) { }

  onSignup(){
    console.log("Signed Up");
  }

  onSubmit(form: NgForm){
    if(!form.valid){
      console.log('invalid form ' );
      return;
    }

    if(!this.passwordInputsMatch(form)){
      console.log('passwords dont match!');
      return;
    }

    console.log('your e-mail is: ' +form.value.email);
    console.log('your pass is: ' +form.value.password);
    console.log('your repeatPassword is: ' +form.value.repeatPassword);
    console.log('Name: ' +form.value.name);
    console.log('Surname: ' +form.value.surname);

    const participantToRegister: ParticipantModel ={
      id: 0,
      name: form.value.name,
      surname: form.value.surname,
      email: form.value.email,
      password: form.value.password
    };

    console.log(participantToRegister);

    this.registerParticipantInDB(participantToRegister);

  }

  public registerParticipantInDB(participantToRegister: ParticipantModel){
    this.signupControllerService.registerParticipantInDB(participantToRegister).subscribe({
      next: (response: ParticipantModel) => console.log(response),
      error: (err: HttpErrorResponse) =>  alert(err.message),
      complete:() => console.log('Complete')
    });
  }

  passwordInputsMatch(form: NgForm){
    return (form.value.password === form.value.repeatPassword);
  }

}
