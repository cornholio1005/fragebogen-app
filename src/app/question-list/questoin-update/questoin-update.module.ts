import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestoinUpdatePageRoutingModule } from './questoin-update-routing.module';

import { QuestoinUpdatePage } from './questoin-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestoinUpdatePageRoutingModule
  ],
  declarations: [QuestoinUpdatePage]
})
export class QuestoinUpdatePageModule {}
