import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/form-elements/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './components/material.module';
import { CardComponent } from './components/card/card.component';
import { SelectComponent } from './components/form-elements/select/select.component';
import { NgIconComponent } from '@ng-icons/core';

@NgModule({
  declarations: [InputComponent, CardComponent, SelectComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, NgIconComponent],
  exports: [
    InputComponent,
    SelectComponent,
    MaterialModule,
    CardComponent,
    NgIconComponent,
  ],
})
export class SharedModule {}
