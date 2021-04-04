import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routesAnimations } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ routesAnimations ]})
export class AppComponent {
  
  getAnimationState(outlet: RouterOutlet) {
    return outlet.activatedRouteData.animationType;
  };

};
