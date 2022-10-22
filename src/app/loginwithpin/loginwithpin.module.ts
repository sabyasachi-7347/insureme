import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginwithpinPageRoutingModule } from './loginwithpin-routing.module';

import { LoginwithpinPage } from './loginwithpin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginwithpinPageRoutingModule
  ],
  declarations: [LoginwithpinPage]
})
export class LoginwithpinPageModule {}
