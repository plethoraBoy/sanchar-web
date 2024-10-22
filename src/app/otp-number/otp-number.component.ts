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
}
