import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
styleUrls: [ '../../../form.shared.scss' ]})
export class LoginFormComponent {
  
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  };

  buildForm(): void {
    const { required, minLength, maxLength } = Validators;
    this.loginForm = this.formBuilder.group({
      uoe: ['', [required, minLength(8), maxLength(12)]],      
      password: ['', [required, minLength(8)]]
    });
  };

};
