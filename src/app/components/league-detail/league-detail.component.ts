import { Component, OnInit, Input } from '@angular/core';
import { SummonerLeague } from 'src/app/models/summoner-league';
import { GameData } from 'src/app/containers/spectator/spectator.component';
import { MatchHistory } from 'src/app/models/matchHistory';

@Component({
  selector: 'app-league-detail',
  templateUrl: './league-detail.component.html',
  styleUrls: ['./league-detail.component.scss']
})
export class LeagueDetailComponent implements OnInit {
  @Input() summLeague: SummonerLeague[];
  @Input() summGames: GameData[];
  @Input() matchHistory: MatchHistory;

  constructor() {}

  ngOnInit() {}
}
