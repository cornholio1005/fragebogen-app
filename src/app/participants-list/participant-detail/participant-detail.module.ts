import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParticipantDetailPageRoutingModule } from './participant-detail-routing.module';

import { ParticipantDetailPage } from './participant-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParticipantDetailPageRoutingModule
  ],
  declarations: [ParticipantDetailPage]
})
export class ParticipantDetailPageModule {}
