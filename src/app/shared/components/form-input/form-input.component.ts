import { Component, DoCheck, Input } from '@angular/core';
import { AbstractControl, ControlContainer, FormGroupDirective } from '@angular/forms';
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
  @Input() regex!: string;

  errors: FormControlErrors = {};

  patternRestriction(event: Event): void {
    const regex = new RegExp(this.regex),
    target = event.target as HTMLInputElement,
    { value } = target;
    if (!regex.test(value)) {
      target.value = value.slice(0, value.length - 1);
    };
  };

  ngDoCheck(): void {
    const { required, minlength, maxlength, email, username } = this.fieldControl?.errors || {},
    { requiredLength } = minlength || maxlength || {};
    this.errors.required = required && 'This field is required.'
    this.errors.minlength =
      minlength && 'This field must have at least ' + requiredLength + ' characters.';
    this.errors.maxlength =
      maxlength && 'This field must have max ' + requiredLength + ' characters.';
    this.errors.email =
      email && 'Enter a valid email address.';
    this.errors.username = username;
  };

};
