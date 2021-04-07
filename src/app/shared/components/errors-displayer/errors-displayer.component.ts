import { Component, Input, OnChanges } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { FieldErrors } from '../../models/field-error.model';

@Component({
  selector: 'app-errors-displayer',
  templateUrl: './errors-displayer.component.html',
  styleUrls: ['./errors-displayer.component.scss']})
export class ErrorsDisplayerComponent implements OnChanges {

  @Input() validationErrors!: ValidationErrors;

  errors: FieldErrors = {};

  ngOnChanges(): void {
    const { required, minlength, maxlength } = this.validationErrors,
    { requiredLength } = minlength || maxlength || {};
    this.errors.required = required && 'es requerido.'
    this.errors.minlength =
      minlength && `debe tener al menos ${requiredLength} caracteres.`;
    this.errors.maxlength =
      maxlength && `debe tener máximo ${requiredLength} caracteres.`;
  };

};
