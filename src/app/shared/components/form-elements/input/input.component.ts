import {
  Component,
  Input,
  forwardRef,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  FormGroup,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  // Inputs related to appearance and styling
  @Input() label!: string;
  @Input() appearance!: 'fill' | 'outline';
  @Input() iconBefore?: string;
  @Input() iconAfter?: string;
  // @Input() floatLabel?= 'auto' ;

  // Inputs related to form control and validation
  @Input() form!: FormGroup;
  @Input() formControlName!: string;
  @Input() required = false;
  @Input() autocomplete?: string;
  @Input() placeholder!: string;
  @Input() hint?: string;
  @Input() id!: string;
  @Input() name?: string | any;
  @Input() type = 'text';
  @Input() disabled = false;

  // Inputs related to error handling
  @Input() errorMessage = 'Invalid input';

  @Output() iconAfterClick = new EventEmitter<void>();
  // ControlValueAccessor methods
  private onChange: (value: string | number) => void = () => {
    console.log('empty input component fn change');
  };
  private onTouch: () => void = () => {
    console.log('empty input component fn touch');
  };
  private innerValue: string | number = '';

  get value(): string | number {
    return this.innerValue;
  }

  set value(val: string | number) {
    if (val !== this.innerValue) {
      this.innerValue = val;
      this.onChange(val); // Notify the change to the parent form
      this.onTouch();
    }
  }

  writeValue(value: string | number): void {
    this.innerValue = value;
  }

  registerOnChange(fn: (value: string | number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
