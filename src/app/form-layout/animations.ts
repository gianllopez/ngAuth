import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

export const routeAnimations = 
  trigger('routeAnimations', [
    transition('logupAnimation <=> loginAnimation', [
      query(':enter, :leave', [
        style({ transform: 'rotate(360deg)'})
      ]),
      group([
        query(':leave', [animate('200ms ease-out')]),
        query(':enter', [animate('300ms ease-out')])
      ])
  ])
])