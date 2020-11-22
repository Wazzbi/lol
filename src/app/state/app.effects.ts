import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';
import { SpectatorService } from '../services/spectator.service';
 
@Injectable()
export class AppEffects {
 
  constructor(
    private riotApi: SpectatorService,
    private actions$: Actions,
  ) {}

  findSummoner$ = createEffect(() => this.actions$.pipe(
    ofType('[App] Find Summoner'),
    mergeMap((payload: {nickname: string, region: string}) => this.riotApi.getSummonerData(payload.nickname, payload.region)
        .pipe(
            mergeMap(summoner => {
                return [
                    ({ type: '[App] Added Summoner', summoner }),
                    ({ type: '[App] Loading Summoner', loading: false })
                ];
            }),
            catchError(() => EMPTY)
        ))
    )
  );
}
