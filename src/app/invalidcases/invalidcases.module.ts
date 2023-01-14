import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvalidcasesPageRoutingModule } from './invalidcases-routing.module';

import { InvalidcasesPage } from './invalidcases.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvalidcasesPageRoutingModule
  ],
  declarations: [InvalidcasesPage]
})
export class InvalidcasesPageModule {}
