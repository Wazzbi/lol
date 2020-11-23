import { createSelector } from '@ngrx/store';
import { AppState } from '../models/app-state';
import { State } from '../models/state';
import { Summoner } from '../models/summoner';
 
export const selectAppStateData = (state: State) => state.appState;
export const selectSummonerData = (state: State) => state.appState.summoner;

export const selectAppState = createSelector(
    selectAppStateData,
    (state: AppState) => state
);

export const selectSummoner = createSelector(
    selectSummonerData,
    (state: Summoner) => state
);