import { createAction, props } from '@ngrx/store';
import { Summoner } from '../models/summoner';

export const loadingSummoner = createAction('[App] Loading Summoner', props<{ loading: boolean }>());
export const addedSummoner = createAction('[App] Added Summoner', props<{ summoner: Summoner }>());
export const findSummoner = createAction('[App] Find Summoner', props<{ nickname: string, region: string }>());

