import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminuploadpayoutgridPageRoutingModule } from './adminuploadpayoutgrid-routing.module';

import { AdminuploadpayoutgridPage } from './adminuploadpayoutgrid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminuploadpayoutgridPageRoutingModule
  ],
  declarations: [AdminuploadpayoutgridPage]
})
export class AdminuploadpayoutgridPageModule {}
