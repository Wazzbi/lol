import { createReducer, on } from '@ngrx/store';
import { AppState } from '../models/app-state';
import {
  //isloading,
  addSummonerComplete,
  addSummoner,
  clearComplete,
  addSummonerLeagues,
  addSummonerLeaguesComplete,
  addSummonerRegion,
  addSummonerMatchHistory,
  addSummonerMatchHistoryComplete,
  addMatchDetail,
  addMatchDetailComplete
} from './app.actions';
 
export const initialState = {
  loadingSummoner: false,
  loadingLeagues: false,
  loadingMatches: false,
  loadingMatchDetail: false,
  summoner: {
    accountId: null,
    id: null,
    name: null,
    profileIconId: null,
    puuid: null,
    revisionDate: null,
    summonerLevel: null,
    region: null,
    status: {
      message: null,
      status_code: null
    }
  },
  summonerLeagues: [],
  matches: [],
  matchesDetail: []

} as AppState;
 
const _appReducer = createReducer(
  initialState,
  // on(isloading, (state, {loading}) => ({...state, loading})),
  on(addSummonerRegion, (state, {region}) => ({...state, summoner: {...state.summoner, region}})),

  on(addSummoner, (state) => ({...state, loadingSummoner: true})),
  on(addSummonerComplete, (state, {summoner}) => ({...state, summoner: {...state.summoner, ...summoner}, loadingSummoner: false})),
  on(clearComplete, (state) => ({...initialState, summoner: {region: state.summoner.region} })),

  on(addSummonerLeagues, (state) => ({...state, loadingLeagues: true})),
  on(addSummonerLeaguesComplete, (state, {summonerLeagues}) => ({...state, summonerLeagues, loadingLeagues: false})),

  on(addSummonerMatchHistory, (state) => ({...state, loadingMatches: true})),
  on(addSummonerMatchHistoryComplete, (state, {matches}) => ({...state, matches, loadingMatches: false})),

  on(addMatchDetail, (state) => ({...state, loadingMatchDetail: true})),
  on(addMatchDetailComplete, (state, {matchDetail}) => (
    {...state, matchesDetail: [...state.matchesDetail, matchDetail], loadingMatches: false})
  ),
);
 
export function appReducer(state, action) {
  return _appReducer(state, action);
}
