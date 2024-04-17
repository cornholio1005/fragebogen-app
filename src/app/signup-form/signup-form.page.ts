import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignupFormService } from './signup-form.service';
import { NgForm } from '@angular/forms';
import { ParticipantModel } from '../model/participant-model';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.page.html',
  styleUrls: ['./signup-form.page.scss'],
})
export class SignupFormPage implements OnInit {
  form!: NgForm;
  isSignedUp = true;

  constructor(private signupFormService: SignupFormService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    console.log();
  }

 /* onSignup(form:NgForm){
    this.onSubmit(form);
  }*/

  onSubmit(form:NgForm){
    this.signupFormService.onSubmit(form);
  }

  goToLogin(){
    this.isSignedUp = !this.isSignedUp;
    this.router.navigate(['/login-form']);
  }


}
