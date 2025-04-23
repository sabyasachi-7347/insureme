import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminbusinesseditPage } from './adminbusinessedit.page';

const routes: Routes = [
  {
    path: '',
    component: AdminbusinesseditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminbusinesseditPageRoutingModule {}
