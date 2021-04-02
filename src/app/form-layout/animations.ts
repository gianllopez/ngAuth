import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

export const routeAnimations = 
  trigger('routeAnimations', [
    transition('logupAnimation <=> loginAnimation', [
      query(':leave', [ animate('.25s', style({ transform: 'rotate(360deg)' })) ]),
      query(':enter', [ style({ display: 'none' }) ])
  ])
])