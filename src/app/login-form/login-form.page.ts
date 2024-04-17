import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginFormService } from './login-form.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.page.html',
  styleUrls: ['./login-form.page.scss'],
})
export class LoginFormPage implements OnInit {

  isLogin = true;
  email!:string;
  password!:string;

  constructor(private loginFormService: LoginFormService,
    private activatedRoute: ActivatedRoute,
    private router: Router ) { }

  ngOnInit() {
    console.log();
  }

  onLogin(){
    this.loginFormService.onLogin();
  }

  goToSignUp(){
    this.isLogin = !this.isLogin;
    this.router.navigate(['/signup-form']);
  }

  onSubmit(form: NgForm){
    console.log("onSubmit was called");
    if(!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    console.log(email, password);

    this.router.navigate(['/signup-form']);

    this.getPersonByEmailFromDB(email);

    form.reset();
  }

  getPersonByEmailFromDB(email: string){
    this.loginFormService.getPersonByEmailFromDB(email);
  }

  ionViewDidLeave(){
    console.log("iOnDidLeave");

  }

}
