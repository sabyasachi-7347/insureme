import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayoutallbusinessPageRoutingModule } from './payoutallbusiness-routing.module';

import { PayoutallbusinessPage } from './payoutallbusiness.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayoutallbusinessPageRoutingModule
  ],
  declarations: [PayoutallbusinessPage]
})
export class PayoutallbusinessPageModule {}
