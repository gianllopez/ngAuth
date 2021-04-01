import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormLayoutComponent } from './form-layout/form-layout.component';

const routes: Routes = [
  { path: '', component: FormLayoutComponent,
    children: [
      {
        path: 'logup',
        loadChildren: () => import('./pages/logup/logup.module').then(m => m.LogupModule),
        data: { animationType: 'logupAnimation' }
      },
      {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
        data: { animationType: 'loginAnimation' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]})
export class AppRoutingModule {};
