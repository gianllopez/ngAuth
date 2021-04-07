import { Component, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
  viewProviders: [
    { provide: ControlContainer,
      useExisting: FormGroupDirective }]})
export class FormInputComponent {

  @Input() fieldErrors!: ValidationErrors;
  @Input() type!: string;
  @Input() placeholder!: string;
  @Input() controlName!: string;

};
