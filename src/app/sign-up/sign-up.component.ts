import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import {
  FormGroup,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'], // Corrected to styleUrls
})
export class SignUpComponent implements OnInit {
onSubmit() {
throw new Error('Method not implemented.');
}
  myForm: FormGroup;
  passwordVisible = false;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }
}
