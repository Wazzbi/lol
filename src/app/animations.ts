import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('LandingPage => SummonerPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ right: '-100%', opacity: 0 })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ right: '100%', opacity: 0 }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ right: '0%', opacity: 1 }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('LandingPage => *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ opacity: 0 })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ opacity: 0 }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ opacity: 1 }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('SummonersPage => LandingPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        style({ left: '-100%', opacity: 0 })
      ]),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%', opacity: 0 }))
        ], { optional: true }),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%', opacity: 1 }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('ItemsPage => LandingPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        style({ left: '-100%', opacity: 0 })
      ]),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%', opacity: 0 }))
        ], { optional: true }),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%', opacity: 1 }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('MapsPage => LandingPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        style({ left: '-100%', opacity: 0 })
      ]),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%', opacity: 0 }))
        ], { optional: true }),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%', opacity: 1 }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('SummonerPage => LandingPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        style({ left: '-100%', opacity: 0 })
      ]),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%', opacity: 0 }))
        ], { optional: true }),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%', opacity: 1 }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('PatchPage => LandingPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        style({ left: '-100%', opacity: 0 })
      ]),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%', opacity: 0 }))
        ], { optional: true }),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%', opacity: 1 }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('BuildsPage => LandingPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        style({ left: '-100%', opacity: 0 })
      ]),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%', opacity: 0 }))
        ], { optional: true }),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%', opacity: 1 }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('BeginnersPage => LandingPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        style({ left: '-100%', opacity: 0 })
      ]),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%', opacity: 0 }))
        ], { optional: true }),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%', opacity: 1 }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
  ]);
