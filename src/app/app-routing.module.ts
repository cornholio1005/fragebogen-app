import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login-form',
    pathMatch: 'full'
  },
  {
    path: 'login-form',
    loadChildren: () => import('./login-form/login-form.module').then( m => m.LoginFormPageModule)
  },
  {
    path: 'participants-list',
    children:[
      {
        path:'',
      loadChildren: () => import('./participants-list/participants-list.module').then( m => m.ParticipantsListPageModule)
      },
      {
        path:':participantId',
        loadChildren: () => import('./participants-list/participant-detail/participant-detail.module').then( m => m.ParticipantDetailPageModule)
      }
    ]

  },
  {
    path: 'signup-form',
    loadChildren: () => import('./signup-form/signup-form.module').then( m => m.SignupFormPageModule)
  },
  {
    path: 'register-question',
    loadChildren: () => import('./register-question/register-question.module').then( m => m.RegisterQuestionPageModule)
  },
  {
    path: 'home-admin',
    loadChildren: () => import('./home-admin/home-admin.module').then( m => m.HomeAdminPageModule)
  },
  {
    path: 'question-list',
    loadChildren: () => import('./question-list/question-list.module').then( m => m.QuestionListPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
