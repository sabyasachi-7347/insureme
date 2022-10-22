import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LampoffersPageRoutingModule } from './lampoffers-routing.module';

import { LampoffersPage } from './lampoffers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LampoffersPageRoutingModule
  ],
  declarations: [LampoffersPage]
})
export class LampoffersPageModule {}
