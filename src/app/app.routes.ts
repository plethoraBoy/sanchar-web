    import { Routes } from '@angular/router';
    import { SignUpComponent } from './sign-up/sign-up.component';
    import { OtpNumberComponent } from './otp-number/otp-number.component';

    export const routes: Routes = [
    {
        path: '',
        component: SignUpComponent,
    },
    { path: 'otp-number', component: OtpNumberComponent },
    ];
