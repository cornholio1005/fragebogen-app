import { Injectable } from '@angular/core';
import { QuestionModel } from '../model/question-model';
import { HttpErrorResponse } from '@angular/common/http';
import { RegisterQuestionControllerService } from './register-question-controller.service';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegisterQuestionService {

  constructor(private registerQuestionControllerService: RegisterQuestionControllerService) { }

  onSubmit(form: NgForm){
    if(!form.valid){
      console.log('invalid form ' );
      return;
    }


    console.log('Question: ' +form.value.question);

    const questionToRegister: QuestionModel ={
      id: 0,
      text: form.value.question
    };

    console.log(questionToRegister);

    this.registerQuestionInDB(questionToRegister);

  }

  public registerQuestionInDB(questionToRegister: QuestionModel){
    this.registerQuestionControllerService.registerQuestionInDB(questionToRegister).subscribe({
      next: (response: QuestionModel) => console.log(response),
      error: (err: HttpErrorResponse) =>  alert(err.message),
      complete:() => console.log('Complete')
    });
  }
}
