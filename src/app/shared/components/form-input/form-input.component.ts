import { Component, Input, DoCheck } from '@angular/core';
import { AbstractControl, ControlContainer, FormGroupDirective, ValidationErrors } from '@angular/forms';
import { FormControlErrors } from '../../interfaces';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
  viewProviders: [
    { provide: ControlContainer,
      useExisting: FormGroupDirective }]})
export class FormInputComponent implements DoCheck {

  @Input() fieldControl!: AbstractControl | null;
  @Input() type!: string;
  @Input() placeholder!: string;
  @Input() fieldControlName!: string;

  errors: FormControlErrors = {};

  ngDoCheck(): void {
    const { required, minlength, maxlength, email } = this.fieldControl?.errors || {},
    { requiredLength } = minlength || maxlength || {};
    this.errors.required = required && 'es requerido.'
    this.errors.minlength =
      minlength && `debe tener al menos ${requiredLength} caracteres.`;
    this.errors.maxlength =
      maxlength && `debe tener máximo ${requiredLength} caracteres.`;
  };

};
