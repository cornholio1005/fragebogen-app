import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestoinUpdatePage } from './questoin-update.page';

const routes: Routes = [
  {
    path: '',
    component: QuestoinUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestoinUpdatePageRoutingModule {}
