import { Component, OnInit, Input, OnChanges } from '@angular/core';
// TODO: GameData dát někam inteligentně..
import { GameData } from '../spectator/spectator.component';

@Component({
  selector: 'app-match-history',
  templateUrl: './match-history.component.html',
  styleUrls: ['./match-history.component.scss']
})
export class MatchHistoryComponent implements OnInit, OnChanges {
  @Input() summGames: GameData[];
  //summGames: GameData[];

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    //this.summGames = this.summGamesData;
  }
}
