import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  passwordVisible = false;
  expectedCaptcha = '';
  submitted = true;
  loginErrorMessage: string | null = null; 

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      captchaResponse: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.expectedCaptcha = this.generateCaptcha();
  }

  generateCaptcha(): string {
    return Math.random().toString().slice(2, 8);
  }

  onLogin() {
    this.submitted = true;
    const captchaResponse = this.loginForm.get('captchaResponse')?.value;

    // Reset the error message
    this.loginErrorMessage = null;

    if (this.loginForm.valid && captchaResponse === this.expectedCaptcha) {
      const { username, password } = this.loginForm.value;
      this.authService.login(username, password).subscribe({
        next: (loginSuccess) => {
          if (loginSuccess) {
            this.router.navigate(['/otp-number']);
          } else {
            this.loginErrorMessage = 'Invalid credentials';
          }
        },
        error: (err) => {
          console.error('Login error:', err);
          this.loginErrorMessage = 'An error occurred during login';
        },
      });
    } else {
      if (captchaResponse !== this.expectedCaptcha) {
        this.loginForm.get('captchaResponse')?.setErrors({ mismatch: true });
      }
      this.expectedCaptcha = this.generateCaptcha();
    }
  }

  getUsernameError() {
    const usernameControl = this.loginForm.get('username');
    if (this.submitted && usernameControl?.hasError('required')) {
      return 'Username is required';
    }
    return '';
  }

  getPasswordError() {
    const passwordControl = this.loginForm.get('password');
    if (this.submitted && passwordControl?.hasError('required')) {
      return 'Password is required.';
    }
    return '';
  }

  getCaptchaError() {
    const captchaControl = this.loginForm.get('captchaResponse');

    if (this.submitted && captchaControl?.hasError('mismatch')) {
      return 'CAPTCHA does not match';
    }
    if (this.submitted && captchaControl?.hasError('required')) {
      return 'CAPTCHA is required';
    }
    return '';
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}
