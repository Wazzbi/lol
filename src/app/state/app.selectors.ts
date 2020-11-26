import { Match } from './../models/match';
import { SummonerLeague } from './../models/summoner-league';
import { createSelector } from '@ngrx/store';
import { AppState } from '../models/app-state';
import { State } from '../models/state';
import { Summoner } from '../models/summoner';
 
const selectAppStateData = (state: State) => state.appState;
const selectSummonerData = (state: State) => state.appState.summoner;
const selectSummonerLeaguesData = (state: State) => state.appState.summonerLeagues;
const selectSummonerMatchesData = (state: State) => state.appState.matches;

const selectLoadingLeaguesData = (state: State) => state.appState.loadingLeagues;

export const selectAppState = createSelector(
    selectAppStateData,
    (state: AppState) => state
);

export const selectSummoner = createSelector(
    selectSummonerData,
    (state: Summoner) => state
);

export const selectSummonerLeagues = createSelector(
    selectSummonerLeaguesData,
    (state: SummonerLeague[]) => state
);

export const selectSummonerMatches = createSelector(
    selectSummonerMatchesData,
    (state: Match[]) => state
);

export const selectLoadingLeagues = createSelector(
    selectLoadingLeaguesData,
    (state: boolean) => state
);
