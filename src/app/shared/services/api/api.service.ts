import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RESTponse, User } from '../../interfaces';
import { Router } from '@angular/router';
import { ValidationErrors } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ApiService {

  constructor(private http: HttpClient, private router: Router) {};

  submitUser(endpoint: string, data: User, onError: (errors: ValidationErrors) => void): void {
    const URL = `http://localhost:8000/users${endpoint}/`;
    this.http.post<RESTponse>(URL, data)
      .subscribe({
        next: res => {
          if (['CREATED', 'AUTHENTICATED'].includes(res.status)) {
            localStorage.setItem('user-hash', res.user.hash)
            this.router.navigateByUrl('home'); // create this page.
          };
        },
        error: res => onError(res.error)
      });
  };

};
