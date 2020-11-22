import { createAction, props } from '@ngrx/store';
import { Summoner } from '../models/summoner';

export const loading = createAction('[App] Loading', props<{ loading: boolean }>());
export const addedSummoner = createAction('[App] Added Summoner', props<{ summoner: Summoner }>());
export const findSummoner = createAction('[App] Find Summoner', props<{ nickname: string, region: string }>());

