import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterQuestionPage } from './register-question.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterQuestionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterQuestionPageRoutingModule {}
