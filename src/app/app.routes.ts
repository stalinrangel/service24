import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'email-password',
    loadComponent: () => import('./email-password/email-password.page').then( m => m.EmailPasswordPage)
  },
  {
    path: 'calification',
    loadComponent: () => import('./calification/calification.page').then( m => m.CalificationPage)
  },
  {
    path: 'edit-profile',
    loadComponent: () => import('./edit-profile/edit-profile.page').then( m => m.EditProfilePage)
  },
  {
    path: 'complete-register',
    loadComponent: () => import('./complete-register/complete-register.page').then( m => m.CompleteRegisterPage)
  },
];
