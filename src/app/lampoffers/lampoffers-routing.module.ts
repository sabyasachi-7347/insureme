import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LampoffersPage } from './lampoffers.page';

const routes: Routes = [
  {
    path: '',
    component: LampoffersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LampoffersPageRoutingModule {}
