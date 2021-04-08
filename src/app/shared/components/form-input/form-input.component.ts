import { Component, Input } from '@angular/core';
import { AbstractControl, ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
  viewProviders: [
    { provide: ControlContainer,
      useExisting: FormGroupDirective }]})
export class FormInputComponent {

  @Input() fieldControl!: AbstractControl | null;
  @Input() type!: string;
  @Input() placeholder!: string;
  @Input() fieldControlName!: string;

};
