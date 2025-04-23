import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvalidcasesPage } from './invalidcases.page';

const routes: Routes = [
  {
    path: '',
    component: InvalidcasesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvalidcasesPageRoutingModule {}
