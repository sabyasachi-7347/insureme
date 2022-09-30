import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SalesdataPageRoutingModule } from './salesdata-routing.module';

import { SalesdataPage } from './salesdata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SalesdataPageRoutingModule
  ],
  declarations: [SalesdataPage]
})
export class SalesdataPageModule {}
