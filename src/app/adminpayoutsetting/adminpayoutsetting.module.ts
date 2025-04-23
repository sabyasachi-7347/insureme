import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminpayoutsettingPageRoutingModule } from './adminpayoutsetting-routing.module';

import { AdminpayoutsettingPage } from './adminpayoutsetting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminpayoutsettingPageRoutingModule
  ],
  declarations: [AdminpayoutsettingPage]
})
export class AdminpayoutsettingPageModule {}
