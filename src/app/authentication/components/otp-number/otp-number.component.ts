import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
@Component({
  selector: 'app-otp-number',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './otp-number.component.html',
  styleUrl: './otp-number.component.scss',
})
export class OtpNumberComponent {
  @Input() label = '';
  @Input() options: { value: string; viewValue: string }[] = [];
  @Input() selectedValue: string | undefined;
  @Output() selectionChange = new EventEmitter<string>();
  myForm!: FormGroup;
  constructor(private router: Router) {}

  onSelectionChange(value: string) {
    this.selectionChange.emit(value);
  }
  myOptions = [
    { value: 1, viewValue: '+91 123-4567' },
    { value: 2, viewValue: '+91  234-5678' },
    { value: 3, viewValue: '+91  345-6789' },
  ];

  selectedOption: string | undefined;
  otpBack() {
    this.router.navigate(['']);
  }
  onSubmit() {
    this.router.navigate(['dashboard']);
  }
  onOptionChange(value: string) {
    console.log('Selected value:', value);
    // Handle the change here
  }
}