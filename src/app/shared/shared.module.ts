import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorsDisplayerComponent } from './components/errors-displayer/errors-displayer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormInputComponent } from './components/form-input/form-input.component';

@NgModule({
  declarations: [
    ErrorsDisplayerComponent,
    FormInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    ErrorsDisplayerComponent,
    FormInputComponent]
})
export class SharedModule {};
