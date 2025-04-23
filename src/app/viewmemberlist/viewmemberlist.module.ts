import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewmemberlistPageRoutingModule } from './viewmemberlist-routing.module';

import { ViewmemberlistPage } from './viewmemberlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewmemberlistPageRoutingModule
  ],
  declarations: [ViewmemberlistPage]
})
export class ViewmemberlistPageModule {}
