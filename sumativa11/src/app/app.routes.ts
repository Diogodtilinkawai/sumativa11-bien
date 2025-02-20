import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'forget-password',
    loadComponent: () => import('./forget-password/forget-password.page').then( m => m.ForgetPasswordPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./sign-up/sign-up.page').then( m => m.SignUpPage)
  },
];
