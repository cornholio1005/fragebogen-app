import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParticipantsListPage } from './participants-list.page';

const routes: Routes = [
  {
    path: '',
    component: ParticipantsListPage
  },  {
    path: 'participant-detail',
    loadChildren: () => import('./participant-detail/participant-detail.module').then( m => m.ParticipantDetailPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParticipantsListPageRoutingModule {}
