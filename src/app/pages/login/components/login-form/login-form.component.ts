import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ApiService } from 'src/app/shared/services/api/api.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: [ '../../../form.shared.scss' ]})
export class LoginFormComponent {
  
  loginForm!: FormGroup;
  invalidCredentials!: string;
  loading = false;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private title: Title) {
    this.title.setTitle('ngAuth - Login');
    this.buildForm();
    this.errorHandler = this.errorHandler.bind(this);
  };

  buildForm(): void {
    const { required, minLength } = Validators;
    this.loginForm = this.formBuilder.group({
      username_or_email: ['', [minLength(8), required]],
      password: ['', [required, minLength(8)]]
    });
  };

  errorHandler(errors: ValidationErrors): void {
    this.loading = false;
    this.invalidCredentials = errors.user;
  };

  onSubmit(): void {
    this.loading = true;
    this.api.submitUser('/login', this.loginForm.value, this.errorHandler);
  };

};
