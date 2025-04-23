import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewbusinesslistPageRoutingModule } from './viewbusinesslist-routing.module';

import { ViewbusinesslistPage } from './viewbusinesslist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewbusinesslistPageRoutingModule
  ],
  declarations: [ViewbusinesslistPage]
})
export class ViewbusinesslistPageModule {}
