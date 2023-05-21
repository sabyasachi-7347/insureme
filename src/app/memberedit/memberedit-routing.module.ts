import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembereditPage } from './memberedit.page';

const routes: Routes = [
  {
    path: '',
    component: MembereditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MembereditPageRoutingModule {}
