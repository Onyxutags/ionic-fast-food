import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLoginGuard } from '../core/core/is-loging.guard';

import { AuthPage } from './auth.page';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [IsLoginGuard],
    canActivateChild: [IsLoginGuard],
    component: AuthPage,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'forgot',
        component: ForgotPasswordComponent,
      },
      {
        path: 'reset/:token',
        component: ResetPasswordComponent,
      },
      {
        path: '**',
        redirectTo: 'login',
        pathMatch: 'all',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
  static components = [
    AuthPage,
    ForgotPasswordComponent,
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent,
  ];
}