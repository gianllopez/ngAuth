import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorsDisplayerComponent } from './components/errors-displayer/errors-displayer.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ ErrorsDisplayerComponent ],
  imports: [ CommonModule ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    ErrorsDisplayerComponent
  ]
})
export class SharedModule {};
