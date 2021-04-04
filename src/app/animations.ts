import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

export const routesAnimations =
  trigger('routesAnimations', [
    transition('logupForm <=> loginForm', [
      group([
        query(':leave', [ animate('.3s', style({ transform: 'translateX(-100%)' })) ]),
        query(':enter', [
          style({ position: 'absolute', right: '-100%' }),
          animate('.3s', style({ right: '0' }))
        ]),
      ])
    ])
  ])