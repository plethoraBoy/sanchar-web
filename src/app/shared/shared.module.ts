import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/form-elements/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './components/material.module';

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  exports: [InputComponent, MaterialModule],
})
export class SharedModule {}
