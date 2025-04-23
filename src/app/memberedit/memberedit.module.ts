import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MembereditPageRoutingModule } from './memberedit-routing.module';

import { MembereditPage } from './memberedit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MembereditPageRoutingModule
  ],
  declarations: [MembereditPage]
})
export class MembereditPageModule {}
