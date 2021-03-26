import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogupFormComponent } from './components/logup-form/logup-form.component';
import { LogupRoutingModule } from './logup.routing.module';

@NgModule({
  declarations: [
    LogupFormComponent
  ],
  imports: [
    CommonModule,
    LogupRoutingModule
  ]
})
export class LogupModule {};
