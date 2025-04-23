import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayoutallbusinessPage } from './payoutallbusiness.page';

const routes: Routes = [
  {
    path: '',
    component: PayoutallbusinessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PayoutallbusinessPageRoutingModule {}
