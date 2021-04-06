import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogupFormComponent } from './components/logup-form/logup-form.component';
import { LogupRoutingModule } from './logup.routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LogupFormComponent
  ],
  imports: [
    CommonModule,
    LogupRoutingModule,
    ReactiveFormsModule
  ]
})
export class LogupModule {};
