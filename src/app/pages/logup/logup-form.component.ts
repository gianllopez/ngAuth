import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ApiService } from 'src/app/shared/services/api/api.service';

@Component({
  selector: 'app-logup-form',
  templateUrl: './logup-form.component.html',
  styleUrls: ['../form.shared.scss']})

export class LogupFormComponent {

  loading = false;
  backError = false;

  logupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private title: Title) {
    this.title.setTitle('ngAuth - Logup');
    this.buildForm();
    this.errorHandler = this.errorHandler.bind(this);
  };

  buildForm(): void {
    const { required, minLength, maxLength, email } = Validators;
    this.logupForm = this.formBuilder.group({
      name: ['', [required, minLength(10), maxLength(30)]],
      username: ['', [required, minLength(8), maxLength(12)]],
      email: ['', [required, email]],
      password: ['', [required, minLength(8)]],
    });
  };

  errorHandler(errors: ValidationErrors): void {
    this.loading = false;
    this.backError = true;
    Object.entries(errors)
      .forEach(err =>
        this.logupForm.get(err[0])?.setErrors({[err[0]]: err[1]}));
  };

  onSubmit(): void {
    if (this.logupForm.valid) {
      this.loading = true;
      this.api.submitUser('/logup', this.logupForm.value, this.errorHandler);
    };
  };

};
