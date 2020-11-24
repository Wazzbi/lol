import { regions } from './../../constants';
import { SummonerLeague } from './../models/summoner-league';
import { Summoner } from './../models/summoner';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { mergeMap, catchError, withLatestFrom } from 'rxjs/operators';
import { SpectatorService } from '../services/spectator.service';
import { Store } from '@ngrx/store';
import { AppState } from '../models/app-state';
import { selectAppState, selectSummoner } from './app.selectors';
import { State } from '../models/state';
import { MatchHistory } from '../models/matchHistory';
 
@Injectable()
export class AppEffects {
  constructor(
    private riotApi: SpectatorService,
    private actions$: Actions,
    private store: Store<State>
  ) {}

  addSummoner$ = createEffect(() => this.actions$.pipe(
    ofType('[App] Add Summoner'),
    mergeMap((payload: {nickname: string, region: string}) => this.riotApi.getSummonerData(payload.nickname, payload.region)
        .pipe(
            withLatestFrom(this.store.select(selectAppState)),
            mergeMap(([summoner, appState]) => {
                const summonerId = summoner.id;
                const accountId = summoner.accountId;
                const region = appState.summoner.region;
                return [
                    ({ type: '[App] Clear Complete' }), // clear previous searching
                    ({ type: '[App] Add Summoner Complete', summoner }),
                    ({ type: '[App] Add Summoner Leagues', summonerId, region }),
                    ({ type: '[App] Add Summoner Match History', accountId, region })
                ];
            }),
            catchError(() => EMPTY)
        ))
    )
  );

  addSummonerLeagues$ = createEffect(() => this.actions$.pipe(
    ofType('[App] Add Summoner Leagues'),
    mergeMap((payload: {summonerId: string, region: string}) => this.riotApi.getSummonerLeague(payload.summonerId, payload.region)
        .pipe(
            mergeMap((summonerLeagues: SummonerLeague[]) => {
                return [
                    ({ type: '[App] Add Summoner Leagues Complete', summonerLeagues })
                ];
            }),
            catchError(() => EMPTY)
        ))
    )
  );

  addSummonerMatches$ = createEffect(() => this.actions$.pipe(
    ofType('[App] Add Summoner Match History'),
    mergeMap((payload: {accountId: string, region: string}) => this.riotApi.getMatchHistory(payload.accountId, payload.region)
        .pipe(
            mergeMap((summonerMatches: MatchHistory) => {
                const matches = summonerMatches.matches;
                return [
                    ({ type: '[App] Add Summoner Match History Complete', matches })
                ];
            }),
            catchError(() => EMPTY)
        ))
    )
  );
}
