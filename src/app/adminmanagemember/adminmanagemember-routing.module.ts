import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminmanagememberPage } from './adminmanagemember.page';

const routes: Routes = [
  {
    path: '',
    component: AdminmanagememberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminmanagememberPageRoutingModule {}
