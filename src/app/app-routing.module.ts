import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'addmember',
    loadChildren: () => import('./addmember/addmember.module').then( m => m.AddmemberPageModule)
  },
  {
    path: 'userprofile',
    loadChildren: () => import('./userprofile/userprofile.module').then( m => m.UserprofilePageModule)
  },
  {
    path: 'managemember',
    loadChildren: () => import('./managemember/managemember.module').then( m => m.ManagememberPageModule)
  },
  {
    path: 'salesdata',
    loadChildren: () => import('./salesdata/salesdata.module').then( m => m.SalesdataPageModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./contacts/contacts.module').then( m => m.ContactsPageModule)
  },
  {
    path: 'loginwithpin',
    loadChildren: () => import('./loginwithpin/loginwithpin.module').then( m => m.LoginwithpinPageModule)
  },
  {
    path: 'addbusiness',
    loadChildren: () => import('./addbusiness/addbusiness.module').then( m => m.AddbusinessPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'payoutgrid',
    loadChildren: () => import('./payoutgrid/payoutgrid.module').then( m => m.PayoutgridPageModule)
  },
  {
    path: 'lampoffers',
    loadChildren: () => import('./lampoffers/lampoffers.module').then( m => m.LampoffersPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'totalcases',
    loadChildren: () => import('./totalcases/totalcases.module').then( m => m.TotalcasesPageModule)
  },
  {
    path: 'invalidcases',
    loadChildren: () => import('./invalidcases/invalidcases.module').then( m => m.InvalidcasesPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'adminlogin',
    loadChildren: () => import('./adminlogin/adminlogin.module').then( m => m.AdminloginPageModule)
  },
  {
    path: 'adminpendingagents',
    loadChildren: () => import('./adminpendingagents/adminpendingagents.module').then( m => m.AdminpendingagentsPageModule)
  },
  {
    path: 'adminpendingbusiness',
    loadChildren: () => import('./adminpendingbusiness/adminpendingbusiness.module').then( m => m.AdminpendingbusinessPageModule)
  },
  {
    path: 'adminmonthlypayouts',
    loadChildren: () => import('./adminmonthlypayouts/adminmonthlypayouts.module').then( m => m.AdminmonthlypayoutsPageModule)
  },
  {
    path: 'adminpayoutsetting',
    loadChildren: () => import('./adminpayoutsetting/adminpayoutsetting.module').then( m => m.AdminpayoutsettingPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
