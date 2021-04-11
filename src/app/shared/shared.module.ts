import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormInputComponent } from './components/form-input/form-input.component';
import { RegstrictDirective } from './directives/regstrict.directive';
import { ApiService } from './services/api/api.service';

@NgModule({
  declarations: [
    FormInputComponent,
    RegstrictDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormInputComponent,
    HttpClientModule
  ],
  providers: [ ApiService ]
})
export class SharedModule {};
