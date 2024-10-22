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
  @Input() required: boolean = false;
  @Input() autocomplete?: string;
  @Input() placeholder!: string;
  @Input() hint?: string;
  @Input() id!: string;
  @Input() name?: any;
  @Input() type: string = 'text';
  @Input() disabled: boolean = false;

  // Inputs related to error handling
  @Input() errorMessage: string = 'Invalid input';

  @Output() iconAfterClick = new EventEmitter<void>();
  // ControlValueAccessor methods
  private onChange: any = () => {};
  private onTouch: any = () => {};
  private innerValue: any = '';

  get value(): any {
    return this.innerValue;
  }

  set value(val: any) {
    if (val !== this.innerValue) {
      this.innerValue = val;
      this.onChange(val); // Notify the change to the parent form
      this.onTouch();
    }
  }

  writeValue(value: any): void {
    this.innerValue = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
