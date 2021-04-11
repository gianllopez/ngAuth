import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RESTponse, User } from '../../interfaces';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ApiService {

  constructor(private http: HttpClient, private router: Router) {};

  createUser(user: User): void {
    this.http.post<RESTponse>(environment.API_URL + '/users/logup/', user)
      .subscribe({
        next: response => {
          if (response.status === 'CREATED') {
            this.router.navigateByUrl('login');
          };
        }
      });
  };

};
