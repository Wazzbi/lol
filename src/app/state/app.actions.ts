import { SummonerLeague } from './../models/summoner-league';
import { createAction, props } from '@ngrx/store';
import { Summoner } from '../models/summoner';
import { Match } from '../models/match';

// export const isloading = createAction('[App] Loading', props<{ loading: boolean }>());
export const addSummonerRegion = createAction('[App] Add Summoner Region Complete', props<{ region: string }>());
export const addSummoner = createAction('[App] Add Summoner', props<{ nickname: string, region: string }>());
export const addSummonerComplete = createAction('[App] Add Summoner Complete', props<{ summoner: Summoner }>());
export const clearSummonerComplete = createAction('[App] Clear Summoner Complete');
export const addSummonerLeagues = createAction('[App] Add Summoner Leagues', props<{ summonerId: string, region: string }>());
export const addSummonerLeaguesComplete = createAction('[App] Add Summoner Leagues Complete', props<{ summonerLeagues: SummonerLeague[] }>());
export const addSummonerMatchHistory = createAction('[App] Add Summoner Match History', props<{ accountId: string, region: string }>());
export const addSummonerMatchHistoryComplete = createAction('[App] Add Summoner Match History Complete', props<{ matches: Match[] }>());

