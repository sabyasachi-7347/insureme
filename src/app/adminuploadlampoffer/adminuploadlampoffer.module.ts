import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminuploadlampofferPageRoutingModule } from './adminuploadlampoffer-routing.module';

import { AdminuploadlampofferPage } from './adminuploadlampoffer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminuploadlampofferPageRoutingModule
  ],
  declarations: [AdminuploadlampofferPage]
})
export class AdminuploadlampofferPageModule {}
