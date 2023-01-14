import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminpendingagentsPageRoutingModule } from './adminpendingagents-routing.module';

import { AdminpendingagentsPage } from './adminpendingagents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminpendingagentsPageRoutingModule
  ],
  declarations: [AdminpendingagentsPage]
})
export class AdminpendingagentsPageModule {}
