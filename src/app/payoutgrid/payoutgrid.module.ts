import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayoutgridPageRoutingModule } from './payoutgrid-routing.module';

import { PayoutgridPage } from './payoutgrid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayoutgridPageRoutingModule
  ],
  declarations: [PayoutgridPage]
})
export class PayoutgridPageModule {}
