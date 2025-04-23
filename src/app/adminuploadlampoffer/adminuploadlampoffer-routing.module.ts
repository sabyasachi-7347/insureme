import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminuploadlampofferPage } from './adminuploadlampoffer.page';

const routes: Routes = [
  {
    path: '',
    component: AdminuploadlampofferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminuploadlampofferPageRoutingModule {}
