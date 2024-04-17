import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterQuestionService } from './register-question.service';

@Component({
  selector: 'app-register-question',
  templateUrl: './register-question.page.html',
  styleUrls: ['./register-question.page.scss'],
})
export class RegisterQuestionPage implements OnInit {

  form!: NgForm;
  constructor(private registerQuestionService: RegisterQuestionService) { }

  ngOnInit() {
    console.log();
  }
  onSubmit(form:NgForm){
    this.registerQuestionService.onSubmit(form);
    form.reset();
  }

}
