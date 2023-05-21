import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminmanagememberPageRoutingModule } from './adminmanagemember-routing.module';

import { AdminmanagememberPage } from './adminmanagemember.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminmanagememberPageRoutingModule
  ],
  declarations: [AdminmanagememberPage]
})
export class AdminmanagememberPageModule {}
