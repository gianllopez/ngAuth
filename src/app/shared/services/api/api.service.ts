import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RESTponse, User } from '../../interfaces';
import { Router } from '@angular/router';
import { ValidationErrors } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ApiService {

  constructor(private http: HttpClient, private router: Router) {};

  URL = 'https://ngauthrest.herokuapp.com/users'

  submitUser(endpoint: string, data: User, onError: (errors: ValidationErrors) => void): void {
    this.http.post<RESTponse>(this.URL + endpoint + '/', data)
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

  verifyHash(onSuccess: (res: any) => void ): void {
    const hash = localStorage.getItem('user-hash');
    this.http.post(this.URL + '/verify-hash/', { hash })
      .subscribe({
        next: res => onSuccess(res),
        error: res => !res.error.valid && localStorage.clear()})
  };

};
