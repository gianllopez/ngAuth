import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LogupFormComponent } from "./components/logup-form/logup-form.component";

const routes: Routes = [
  { path: '', component: LogupFormComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class LogupRoutingModule {};
