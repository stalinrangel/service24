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
  {
    path: 'camera-preview',
    loadComponent: () => import('./camera-preview/camera-preview.page').then( m => m.CameraPreviewPage)
  },
  {
    path: 'change-password',
    loadComponent: () => import('./change-password/change-password.page').then( m => m.ChangePasswordPage)
  },
  {
    path: 'chat-password',
    loadComponent: () => import('./chat-password/chat-password.page').then( m => m.ChatPasswordPage)
  },
  {
    path: 'chat-support',
    loadComponent: () => import('./chat-support/chat-support.page').then( m => m.ChatSupportPage)
  },
  {
    path: 'codepassword',
    loadComponent: () => import('./codepassword/codepassword.page').then( m => m.CodepasswordPage)
  },
  {
    path: 'confirm-info',
    loadComponent: () => import('./confirm-info/confirm-info.page').then( m => m.ConfirmInfoPage)
  },
  {
    path: 'contract',
    loadComponent: () => import('./contract/contract.page').then( m => m.ContractPage)
  },
  {
    path: 'contrasena',
    loadComponent: () => import('./contrasena/contrasena.page').then( m => m.ContrasenaPage)
  },
  {
    path: 'finish-register',
    loadComponent: () => import('./finish-register/finish-register.page').then( m => m.FinishRegisterPage)
  },
  {
    path: 'info-profile',
    loadComponent: () => import('./info-profile/info-profile.page').then( m => m.InfoProfilePage)
  },
  {
    path: 'payments',
    loadComponent: () => import('./payments/payments.page').then( m => m.PaymentsPage)
  },
  {
    path: 'privacy-policy',
    loadComponent: () => import('./privacy-policy/privacy-policy.page').then( m => m.PrivacyPolicyPage)
  },
  {
    path: 'signature',
    loadComponent: () => import('./signature/signature.page').then( m => m.SignaturePage)
  },
  {
    path: 'terms-conditions',
    loadComponent: () => import('./terms-conditions/terms-conditions.page').then( m => m.TermsConditionsPage)
  },
  {
    path: 'tutorial',
    loadComponent: () => import('./tutorial/tutorial.page').then( m => m.TutorialPage)
  },
  {
    path: 'verify-number',
    loadComponent: () => import('./verify-number/verify-number.page').then( m => m.VerifyNumberPage)
  },
  {
    path: 'view-contrat',
    loadComponent: () => import('./view-contrat/view-contrat.page').then( m => m.ViewContratPage)
  },
  {
    path: 'zones',
    loadComponent: () => import('./zones/zones.page').then( m => m.ZonesPage)
  },
  {
    path: 'zones-register',
    loadComponent: () => import('./zones-register/zones-register.page').then( m => m.ZonesRegisterPage)
  },
  {
    path: 'zones-service',
    loadComponent: () => import('./zones-service/zones-service.page').then( m => m.ZonesServicePage)
  },
  {
    path: 'chat-pedidos',
    loadComponent: () => import('./chat-pedidos/chat-pedidos.page').then( m => m.ChatPedidosPage)
  },
];
