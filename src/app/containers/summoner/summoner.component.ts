import { map } from 'rxjs/operators';
import { Match } from './../../models/match';
import { SummonerLeague } from './../../models/summoner-league';
import { Observable, Subscription } from 'rxjs';
import { Summoner } from './../../models/summoner';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSummoner, selectSummonerLeagues, selectSummonerMatches } from 'src/app/state/app.selectors';
import { State } from 'src/app/models/state';

@Component({
  selector: 'app-summoner',
  templateUrl: './summoner.component.html',
  styleUrls: ['./summoner.component.scss']
})
export class SummonerComponent implements OnInit, OnDestroy {
  summoner$: Observable<Summoner>;
  leagues$: Observable<SummonerLeague[]>;
  matches$: Observable<Match[]>;

  // INFINITIVE SCROLL
  matchSub: Subscription;
  matches: Match[];
  matchArray: Match[] = [];
  sum: number;
  throttle = 300;
  scrollDistance = 1;
  direction = 'down';

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.summoner$ = this.store.select(selectSummoner);
    this.leagues$ = this.store.select(selectSummonerLeagues);
    this.matches$ = this.store.select(selectSummonerMatches);

    this.matchSub = this.matches$.subscribe((matches: Match[]) => {
      this.matches = matches;
      this.sum = matches.length >= 20 ? 20 : matches.length;
      this.appendItems(0, this.sum);
    });
  }

  addItems(startIndex = 0, endIndex = 0) {
    for (let i = startIndex; i < endIndex; ++i) {
      this.matchArray.push(this.matches[i]);
    }
  }
  
  appendItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex);
  }

  onScrollDown() {

    if (this.matches.length <= 20) {
      return;
    }
    // add another 20 items
    const start = this.sum;
    this.sum += ((this.sum + 20) <= this.matches.length) ? 20 : (this.matches.length - this.sum);
    this.appendItems(start, this.sum);
  }

  ngOnDestroy(): void {
    this.matchSub.unsubscribe;
  }

}
