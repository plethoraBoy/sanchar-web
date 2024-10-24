import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import {
  FormGroup,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  loginForm!: FormGroup;
  passwordVisible = false;
  expectedCaptcha = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          // Validators.pattern(
          //   '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
          // ),
        ],
      ],
      captchaResponse: [''],
    });
  }

  ngOnInit(): void {
    this.expectedCaptcha = this.generateCaptcha();
    console.log('Expected CAPTCHA:', this.expectedCaptcha);
  }

  generateCaptcha(): string {
    return Math.random().toString().slice(2, 8); // Generate a random 6-digit number as CAPTCHA
  }

  onLogin() {
    console.log(`Expected CAPTCHA: ${this.expectedCaptcha}`);
    const captchaResponse = this.loginForm.get('captchaResponse')?.value; // Get entered CAPTCHA value
    console.log(`Entered CAPTCHA: ${captchaResponse}`);

    if (this.loginForm.valid) {
      if (captchaResponse !== this.expectedCaptcha) {
        this.loginForm.get('captchaResponse')?.setErrors({ mismatch: true });
        console.log('CAPTCHA does not match. Please try again.');
        //reest
        this.expectedCaptcha = this.generateCaptcha();
        this.loginForm.get('captchaResponse')?.setValue('');
        return;
      } else {
        console.log('Form', this.loginForm.value);
        this.router.navigate(['/otp-number']);
      }
    } else {
      console.log('Form is invalid');
      this.loginForm.get('captchaResponse')?.setValue('');
    }
  }

  getUsernameError() {
    const usernameControl = this.loginForm.get('username');
    if (usernameControl?.hasError('required')) {
      return 'Username is required';
    }
    if (usernameControl?.hasError('email')) {
      return 'Enter a valid email';
    }
    return '';
  }

  getPasswordError() {
    const passwordControl = this.loginForm.get('password');
    if (passwordControl?.hasError('required')) {
      return `Password is required.`;
    }
    return '';
  }

  getCaptchaError() {
    const captchaControl = this.loginForm.get('captchaResponse');

    if (captchaControl?.hasError('mismatch')) {
      return 'CAPTCHA does not match';
    }
    return '';
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}
