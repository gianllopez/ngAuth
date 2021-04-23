import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormGroupDirective } from '@angular/forms';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ],
  providers: [ FormGroupDirective ]
})
export class LoginModule { }
