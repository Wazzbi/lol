import { createReducer, on } from '@ngrx/store';
import { loadingSummoner, addedSummoner, findSummoner } from './app.actions';
 
export const initialState = {
    loadingSummoner: 'false',
    summoner: {
        accountId: null,
        id: null,
        name: null,
        profileIconId: null,
        puuid: null,
        revisionDate: null,
        summonerLevel: null
    }
};
 
const _appReducer = createReducer(
  initialState,
  on(loadingSummoner, (state, {loading}) => ({...state, loading})),
  on(addedSummoner, (state, {summoner}) => ({...state, summoner})),
  on(findSummoner, (state) => ({...state, loading: true})),
);
 
export function appReducer(state, action) {
  return _appReducer(state, action);
}
