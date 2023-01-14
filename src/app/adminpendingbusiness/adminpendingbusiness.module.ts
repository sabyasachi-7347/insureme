import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminpendingbusinessPageRoutingModule } from './adminpendingbusiness-routing.module';

import { AdminpendingbusinessPage } from './adminpendingbusiness.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminpendingbusinessPageRoutingModule
  ],
  declarations: [AdminpendingbusinessPage]
})
export class AdminpendingbusinessPageModule {}
