import { BackService } from './../../services/back.service';
import { MatchDetail, ParticipantIdentity } from './../../models/match-detail';
import { map } from 'rxjs/operators';
import { champions, regions } from '../../../constants';
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

  summonerName: string;

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
  scrollDistance = 1;
  direction = 'down';

  constructor(private riotApi: SpectatorService, public backService: BackService, private store: Store<State>) { }

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
      this.region = summoner.region;
      this.summonerName = summoner.name;
    });
  }

  addItems(startIndex = 0, endIndex = 0) {
    for (let i = startIndex; i < endIndex; ++i) {
      this.matchDetailSub = this.riotApi.getMatchDetail(this.matches[i].gameId, this.region).subscribe(
        (matchDetail: MatchDetail) => {
          this.matchArray.push(matchDetail);
          this.matchArray.sort((a, b) => b.gameId - a.gameId);
        }
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

  playerChampName(matchDetail: MatchDetail): string {
    const playerId: number = matchDetail.participantIdentities.find(p => p.player.summonerName === this.summonerName).participantId;
    const champId = matchDetail.participants.find(p => p.participantId === playerId).championId;
    return champions[champId];
  }

  getChampionIcon(match: MatchDetail): string {
    return this.backService.getChampionIcon(this.playerChampName(match));
  }

  ngOnDestroy(): void {
    this.matchSub.unsubscribe;
    this.regionSub.unsubscribe;
    if (this.matchDetailSub) {
      this.matchDetailSub.unsubscribe;
    }
  }

}
