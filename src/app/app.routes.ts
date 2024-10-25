import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FaqComponent } from './pages/faq/faq.component';
import { authGuard } from './authentication/guards/auth.guard';
import { LoginComponent } from './authentication/components/login/login.component';
import { OtpNumberComponent } from './authentication/components/otp-number/otp-number.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'otp-number',
    component: OtpNumberComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'faq',
        component: FaqComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
