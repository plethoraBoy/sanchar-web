import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { OtpNumberComponent } from './otp-number/otp-number.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FaqComponent } from './pages/faq/faq.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'faq',
        component: FaqComponent,
      },
      {
        path: '', // Default route inside the layout
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'otp-number',
    component: OtpNumberComponent,
  },
  {
    path: '**', // Wildcard route for 404 Not Found
    redirectTo: '', // Redirect to the base route or a specific route
  },
];
