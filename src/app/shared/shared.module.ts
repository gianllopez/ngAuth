import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormInputComponent } from './components/form-input/form-input.component';
import { RegstrictDirective } from './directives/regstrict.directive';

@NgModule({
  declarations: [ FormInputComponent, RegstrictDirective ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormInputComponent
  ]
})
export class SharedModule {};
