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
  {
    path: 'detail-order',
    loadComponent: () => import('./detail-order/detail-order.page').then( m => m.DetailOrderPage)
  },
  {
    path: 'detail-tracking',
    loadComponent: () => import('./detail-tracking/detail-tracking.page').then( m => m.DetailTrackingPage)
  },
  {
    path: 'cancel-order',
    loadComponent: () => import('./cancel-order/cancel-order.page').then( m => m.CancelOrderPage)
  },
  {
    path: 'list-services',
    loadComponent: () => import('./list-services/list-services.page').then( m => m.ListServicesPage)
  },
  {
    path: 'add-service',
    loadComponent: () => import('./add-service/add-service.page').then( m => m.AddServicePage)
  },
];
