import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddbusinessPage } from './addbusiness.page';

const routes: Routes = [
  {
    path: '',
    component: AddbusinessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddbusinessPageRoutingModule {}
