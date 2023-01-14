import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TotalcasesPageRoutingModule } from './totalcases-routing.module';

import { TotalcasesPage } from './totalcases.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TotalcasesPageRoutingModule
  ],
  declarations: [TotalcasesPage]
})
export class TotalcasesPageModule {}
