import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class RoutesGuard implements CanActivate {

  constructor(private router: Router) {};
  
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const { path } = route.url[0],
    loggedIn = localStorage.getItem('user-hash') ? true : false,
    isForm = ['logup', 'login'].includes(path);
    if (isForm && loggedIn) {
      this.router.navigateByUrl('home');
    } else if (!isForm && !loggedIn) {
      this.router.navigateByUrl('logup');
    };
    return isForm ? !loggedIn : loggedIn;
  };
  
};
