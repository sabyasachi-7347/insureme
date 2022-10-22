import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginwithpinPage } from './loginwithpin.page';

const routes: Routes = [
  {
    path: '',
    component: LoginwithpinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginwithpinPageRoutingModule {}
