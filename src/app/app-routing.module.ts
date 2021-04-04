import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'logup',
    loadChildren: () => import('./pages/logup/logup.module').then(m => m.LogupModule),
    data: { animationType: 'logupForm' }
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
    data: { animationType: 'loginForm' }
  },
  { path: '', redirectTo: 'logup', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]})
export class AppRoutingModule {};
