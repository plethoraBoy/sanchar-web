import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select',
  standalone: false,
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent {
  @Input() label: string = '';
  @Input() placeholder :string=''
  @Input() options: Array<{ value: number; viewValue: any }> = [];
  @Input() selectedValue: string | undefined;
  @Output() selectionChange = new EventEmitter<string>();
  myForm!: FormGroup;

  onSelectionChange(value: string) {
    this.selectionChange.emit(value);
  }
}
