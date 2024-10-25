import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/form-elements/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './components/material.module';
import { CardComponent } from './components/card/card.component';
import { SelectComponent } from './components/form-elements/select/select.component';

@NgModule({
  declarations: [InputComponent, CardComponent, SelectComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MaterialModule],
  exports: [InputComponent, SelectComponent, MaterialModule,ReactiveFormsModule, FormsModule, CardComponent],
})
export class SharedModule {}
