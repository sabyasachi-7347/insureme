import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminmonthlypayoutsPageRoutingModule } from './adminmonthlypayouts-routing.module';

import { AdminmonthlypayoutsPage } from './adminmonthlypayouts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminmonthlypayoutsPageRoutingModule
  ],
  declarations: [AdminmonthlypayoutsPage]
})
export class AdminmonthlypayoutsPageModule {}
