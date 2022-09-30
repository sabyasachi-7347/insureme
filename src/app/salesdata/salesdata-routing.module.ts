import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesdataPage } from './salesdata.page';

const routes: Routes = [
  {
    path: '',
    component: SalesdataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesdataPageRoutingModule {}
