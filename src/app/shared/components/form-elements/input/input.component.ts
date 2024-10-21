import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  // Inputs related to appearance and styling
  @Input() label!: string;
  @Input() appearance!: 'fill' | 'outline';
  @Input() iconBefore?: string; // Adjusted type for clarity
  @Input() iconAfter?: string;
  @Input() floatLabel? :any // Specify floatLabel types

  // Inputs related to form control and validation
  @Input() form!: FormGroup; // Form group containing the control
  @Input() controlName!: any; // Name of the control in the form group
  @Input() required: boolean = false; // Default to false
  @Input() autocomplete?: string; // Adjusted type for clarity
  @Input() placeholder!: string;
  @Input() hint?: string;
  @Input() id!: string;
  @Input() name?: any; // Optional
  @Input() type: string = 'text'; // Default to 'text'
  @Input() disabled: boolean = false; // Default to false

  // Inputs related to error handling
  @Input() errorMessage: string = 'Invalid input'; // Default error message
}
