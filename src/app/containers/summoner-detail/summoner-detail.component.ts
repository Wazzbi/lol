import { SummonerLeague } from './../../models/summoner-league';
import { Summoner } from './../../models/summoner';
import { Component, OnInit, Input } from '@angular/core';
import { GameData } from '../spectator/spectator.component';

@Component({
  selector: 'app-summoner-detail',
  templateUrl: './summoner-detail.component.html',
  styleUrls: ['./summoner-detail.component.scss']
})
export class SummonerDetailComponent implements OnInit {
  @Input() summoner: Summoner;
  @Input() summLeague: SummonerLeague[];
  @Input() summGames: GameData[];

  icon_URL: string;
  rankedEmblem: string;

  constructor() {}

  ngOnInit() {
    this.icon_URL = `http://ddragon.leagueoflegends.com/cdn/10.3.1/img/profileicon/${this.summoner.profileIconId}.png`;
    this.rankedEmblem = `../../../assets/ranked-emblems/Emblem_${this.summLeague[0].tier}.png`;
  }

  /*  ngOnChanges(changes: SimpleChanges): void {
    console.log("onchanges: ", this.summLeague);
    //this.ngOnInit();
    } */
}
