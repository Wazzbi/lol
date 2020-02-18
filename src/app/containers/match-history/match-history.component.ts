import { MatchDetail, ParticipantIdentity, Participant } from './../../models/match-detail';
import { Component, OnInit, Input } from '@angular/core';
import { MatchHistory } from '../../models/matchHistory';
import { Summoner } from 'src/app/models/summoner';
@Component({
  selector: 'app-match-history',
  templateUrl: './match-history.component.html',
  styleUrls: ['./match-history.component.scss']
})
export class MatchHistoryComponent implements OnInit {
  @Input() matchesDetail: MatchDetail[];
  @Input() summoner: Summoner;

  summGames: Array<any> = []; // TODO:interface gameData

  constructor() {}

  ngOnInit() {
    // TODO: loading kolotoč
    // TODO: sorting
    this.sortData(this.matchesDetail);
  }

  // TODO: toto musí být servisa....
  sortData(matches: MatchDetail[]) {
    for (const match of matches) {
      let gameType = match.gameType;
      let gameMode = match.gameMode;
      let summMetaData = match.participantIdentities.find(obj => obj.player.summonerName === this.summoner.name);
      let summIndex = summMetaData.participantId;
      let summGameData = match.participants[summIndex];

      let gameData = {
        gameType: gameType,
        gameMode: gameMode,
        summMetaData: summMetaData,
        summGameData: summGameData
      };

      this.summGames.push(gameData);
    }
    console.log('summGames: ', this.summGames);
  }
}
