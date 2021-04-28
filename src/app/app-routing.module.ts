import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LogupFormComponent } from './pages/logup/logup-form.component';
import { RoutesGuard } from './shared/guardians/routes.guard';

const routes: Routes = [
  {
    path: 'logup',
    component: LogupFormComponent,
    data: { animationType: 'logupForm' },
    canActivate: [RoutesGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
    data: { animationType: 'loginForm' },
    canActivate: [RoutesGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    data: { animationType: 'Home' },
    canActivate: [RoutesGuard]
  },
  { path: '', redirectTo: 'logup', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]})
export class AppRoutingModule {};
