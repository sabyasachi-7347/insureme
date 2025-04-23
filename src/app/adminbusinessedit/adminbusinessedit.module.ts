import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminbusinesseditPageRoutingModule } from './adminbusinessedit-routing.module';

import { AdminbusinesseditPage } from './adminbusinessedit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminbusinesseditPageRoutingModule
  ],
  declarations: [AdminbusinesseditPage]
})
export class AdminbusinesseditPageModule {}
