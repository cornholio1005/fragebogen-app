import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionListPage } from './question-list.page';

const routes: Routes = [
  {
    path: '',
    component: QuestionListPage
  },  {
    path: 'questoin-update',
    loadChildren: () => import('./questoin-update/questoin-update.module').then( m => m.QuestoinUpdatePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionListPageRoutingModule {}
