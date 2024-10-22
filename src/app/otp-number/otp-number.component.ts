import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-otp-number',
  standalone: true,
  imports: [SharedModule, ReactiveFormsModule],
  templateUrl: './otp-number.component.html',
  styleUrl: './otp-number.component.scss',
})
export class OtpNumberComponent {
  @Input() label: string = '';
  @Input() options: Array<{ value: string; viewValue: string }> = [];
  @Input() selectedValue: string | undefined;
  @Output() selectionChange = new EventEmitter<string>();
  myForm!: FormGroup;

  onSelectionChange(value: string) {
    this.selectionChange.emit(value);
  }
  myOptions = [
    { value: 1, viewValue: '+91 123-4567' },
    { value: 2, viewValue: '+91  234-5678' },
    { value: 3, viewValue: '+91  345-6789' },
  ];

  selectedOption: string | undefined;

  onOptionChange(value: string) {
    console.log('Selected value:', value);
    // Handle the change here
  }
}
