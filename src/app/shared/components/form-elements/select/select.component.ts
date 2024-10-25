import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select',
  standalone: false,
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() options: { value: number; viewValue: string | number }[] = [];
  @Input() selectedValue: string | undefined;
  @Output() selectionChange = new EventEmitter<string>();
  myForm!: FormGroup;

  onSelectionChange(value: string) {
    this.selectionChange.emit(value);
  }
}
