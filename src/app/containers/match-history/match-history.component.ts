import { ChampList, Champion } from './../../models/champ-list';
import { SpectatorService } from './../../services/spectator.service';
import { MatchDetail, ParticipantIdentity, Participant } from './../../models/match-detail';
import { Component, OnInit, Input } from '@angular/core';
import { MatchHistory } from '../../models/matchHistory';
import { Summoner } from 'src/app/models/summoner';

// někam uklidit do modelů pokud bude potřeba i jinde
export class GameData {
  gameType: string;
  gameMode: string;
  summMetaData: ParticipantIdentity;
  summGameData: Participant;
  icon_url: string;
}

@Component({
  selector: 'app-match-history',
  templateUrl: './match-history.component.html',
  styleUrls: ['./match-history.component.scss']
})
export class MatchHistoryComponent implements OnInit {
  @Input() matchesDetail: MatchDetail[];
  @Input() summoner: Summoner;

  summGames: Array<any> = []; // TODO:interface gameData
  champList: ChampList;

  constructor(private specService: SpectatorService) {}

  ngOnInit() {
    //nahrát champ meta data ( přiřadit jméno champa k jeho id)
    this.specService.getChampsData().subscribe(res => {
      this.champList = res;
      console.log('champs recieved: ', this.champList.data);
      this.sortData(this.matchesDetail);
    });
  }

  // TODO: toto musí být servisa....
  // vytvoří object s info pro tvoření tabulky jednodušeji (možná ji ještě očešu)
  sortData(matches: MatchDetail[]) {
    for (const match of matches) {
      let summMetaData = match.participantIdentities.find(obj => obj.player.summonerName === this.summoner.name);
      let summIndex = summMetaData.participantId;
      let summGameData = match.participants[summIndex];

      // TODO: toto by šlo určitě taky nějak inteligentně..
      let gameD: GameData = new GameData();
      gameD.gameType = match.gameType;
      gameD.gameMode = match.gameMode;
      gameD.summMetaData = summMetaData;
      gameD.summGameData = summGameData;
      gameD.icon_url = this.champIcon_URL(summGameData);

      this.summGames.push(gameD);
    }
    console.log('summGames: ', this.summGames);
  }

  // let spaghetti rolls :-P
  champIcon_URL(summGameData: Participant): string {
    let champId = summGameData.championId;
    let champData = this.champList.data;
    let champName = '';

    Object.keys(champData).find(champ => {
      if (champData[champ].key == champId) {
        champName = champData[champ].name;
      }
    });
    return `http://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/${champName}.png`;
  }
}
