import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParticipantDetailPage } from './participant-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ParticipantDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParticipantDetailPageRoutingModule {}
