import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RESTponse, User } from '../../interfaces';
import { Router } from '@angular/router';
import { FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ApiService {

  constructor(private http: HttpClient, private router: Router) {};

  errors!: ValidationErrors;

  createUser(user: User, errorHandler: (errors: ValidationErrors) => void): void {
    this.http.post<RESTponse>('http://localhost:8000/users/logup/', user)
      .subscribe({
        next: res => {
          if (res.status === 'CREATED') {
            localStorage.setItem('user-hash', res.user.hash)
            this.router.navigateByUrl('home'); // create this page.
          };
        },
        error: res => errorHandler(res.error)
      });
  };

};
