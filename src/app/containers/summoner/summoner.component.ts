import { Match } from './../../models/match';
import { SummonerLeague } from './../../models/summoner-league';
import { Observable } from 'rxjs';
import { Summoner } from './../../models/summoner';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSummoner, selectSummonerLeagues, selectSummonerMatches } from 'src/app/state/app.selectors';
import { State } from 'src/app/models/state';

@Component({
  selector: 'app-summoner',
  templateUrl: './summoner.component.html',
  styleUrls: ['./summoner.component.scss']
})
export class SummonerComponent implements OnInit {
  summoner$: Observable<Summoner>;
  leagues$: Observable<SummonerLeague[]>;
  matches$: Observable<Match[]>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.summoner$ = this.store.select(selectSummoner);
    this.leagues$ = this.store.select(selectSummonerLeagues);
    this.matches$ = this.store.select(selectSummonerMatches);
  }

}
