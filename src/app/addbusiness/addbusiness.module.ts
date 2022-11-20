import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddbusinessPageRoutingModule } from './addbusiness-routing.module';

import { AddbusinessPage } from './addbusiness.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddbusinessPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddbusinessPage]
})
export class AddbusinessPageModule {}
