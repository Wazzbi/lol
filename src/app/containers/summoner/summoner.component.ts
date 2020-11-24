import { MatchDetail } from './../../models/match-detail';
import { map } from 'rxjs/operators';
import { regions } from '../../../constants';
import { Match } from './../../models/match';
import { SummonerLeague } from './../../models/summoner-league';
import { Observable, Subscription } from 'rxjs';
import { Summoner } from './../../models/summoner';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSummoner, selectSummonerLeagues, selectSummonerMatches } from 'src/app/state/app.selectors';
import { State } from 'src/app/models/state';
import { addSummoner, addSummonerRegion } from '../../state/app.actions';
import { SpectatorService } from 'src/app/services/spectator.service';

@Component({
  selector: 'app-summoner',
  templateUrl: './summoner.component.html',
  styleUrls: ['./summoner.component.scss']
})
export class SummonerComponent implements OnInit, OnDestroy {
  summoner$: Observable<Summoner>;
  leagues$: Observable<SummonerLeague[]>;
  matches$: Observable<Match[]>;

  matchDetailSub: Subscription;

  // REGIONS
  regions = regions;
  regionSub: Subscription;
  region: string;

  // INFINITE SCROLL
  matchSub: Subscription;
  matches: Match[];
  matchArray: MatchDetail[] = [];
  sum: number;
  throttle = 300;
  scrollDistance = 5;
  direction = 'down';

  constructor(private riotApi: SpectatorService, private store: Store<State>) { }

  ngOnInit() {
    this.summoner$ = this.store.select(selectSummoner);
    this.leagues$ = this.store.select(selectSummonerLeagues);
    this.matches$ = this.store.select(selectSummonerMatches);

    this.matchSub = this.matches$.subscribe((matches: Match[]) => {
      this.matchArray = []; // reset array in view
      if (matches && matches.length) {
        this.matches = matches;
        this.sum = matches.length >= 20 ? 20 : matches.length;
        this.appendItems(0, this.sum);
      }
    });

    this.regionSub = this.summoner$.subscribe((summoner: Summoner) => {
      console.warn(summoner.region);
      this.region = summoner.region;
    });
  }

  addItems(startIndex = 0, endIndex = 0) {
    for (let i = startIndex; i < endIndex; ++i) {
      this.matchDetailSub = this.riotApi.getMatchDetail(this.matches[i].gameId, this.region).subscribe(
        (matchDetail: MatchDetail) => this.matchArray.push(matchDetail)
      );
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

  searchPlayer(nickname: string, region: string): void {
    this.store.dispatch(addSummonerRegion({region}));
    this.store.dispatch(addSummoner({nickname, region}));
  }

  ngOnDestroy(): void {
    this.matchSub.unsubscribe;
    this.regionSub.unsubscribe;
    if (this.matchDetailSub) {
      this.matchDetailSub.unsubscribe;
    }
  }

}
