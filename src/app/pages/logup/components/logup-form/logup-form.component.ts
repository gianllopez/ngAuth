import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-logup-form',
  templateUrl: './logup-form.component.html',
  styleUrls: ['../../../form.shared.scss']})

export class LogupFormComponent {

  showpwd = false;

  logupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  };

  buildForm(): void {
    const { required, minLength, maxLength, email } = Validators;
    this.logupForm = this.formBuilder.group({
      name: ['', [required, minLength(10), maxLength(30)]],
      username: ['', [required, minLength(8), maxLength(12)]],
      email: ['', [email]],
      password: ['', [required, minLength(8)]],
    });
  };


};
