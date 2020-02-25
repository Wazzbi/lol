import { SummonerLeague } from './../../models/summoner-league';
import { Summoner } from './../../models/summoner';
import { Component, OnInit, Input } from '@angular/core';
import { GameData } from '../spectator/spectator.component';
import { MatchHistory } from 'src/app/models/matchHistory';

@Component({
  selector: 'app-summoner-detail',
  templateUrl: './summoner-detail.component.html',
  styleUrls: ['./summoner-detail.component.scss']
})
export class SummonerDetailComponent implements OnInit {
  @Input() summoner: Summoner;
  @Input() summLeague: SummonerLeague[];
  @Input() summGames: GameData[];
  @Input() matchHistory: MatchHistory;

  ICON_URL: string;
  rankedEmblem: string;

  constructor() {}

  ngOnInit() {
    this.ICON_URL = `http://ddragon.leagueoflegends.com/cdn/10.3.1/img/profileicon/${this.summoner.profileIconId}.png`; // OnChanges ???
    this.rankedEmblem = `../../../assets/ranked-emblems/Emblem_${this.summLeague[0].tier}.png`; // OnChanges ???
  }

  /*  ngOnChanges(changes: SimpleChanges): void {
    console.log("onchanges: ", this.summLeague);
    //this.ngOnInit();
    } */
}
