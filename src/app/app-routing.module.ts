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
    path: 'login',
    loadChildren: () => import('./pages/user/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/user/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./pages/user/forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'resetpassword',
    loadChildren: () => import('./pages/user/resetpassword/resetpassword.module').then( m => m.ResetpasswordPageModule)
  },
  {
    path: 'user-home',
    loadChildren: () => import('./pages/user/user-home/user-home.module').then( m => m.UserHomePageModule)
  },
  {
    path: 'user-detail',
    loadChildren: () => import('./pages/user/user-detail/user-detail.module').then( m => m.UserDetailPageModule)
  },
  {
    path: 'courtier',
    loadChildren: () => import('./pages/user/courtier/courtier.module').then( m => m.CourtierPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
