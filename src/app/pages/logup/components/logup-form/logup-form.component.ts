import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api/api.service';

@Component({
  selector: 'app-logup-form',
  templateUrl: './logup-form.component.html',
  styleUrls: ['../../../form.shared.scss']})

export class LogupFormComponent {
  
  submitted = false;

  logupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private api: ApiService) {
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

  submitForm(): void {
    if (this.logupForm.valid) {
      this.submitted = true;
      console.log(this.logupForm.value);
      this.api.createUser(this.logupForm.value)
    };
  };

};
