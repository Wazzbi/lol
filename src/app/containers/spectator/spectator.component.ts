import { MatchDetail } from './../../models/match-detail';
import { SpectatorData } from './../../models/spectator-data';
import { SummonerLeague } from './../../models/summoner-league';
import { Summoner } from './../../models/summoner';
import { SpectatorService } from './../../services/spectator.service';
import { Component, OnInit } from '@angular/core';
import { MatchHistory } from 'src/app/models/matchHistory';

@Component({
  selector: 'app-spectator',
  templateUrl: './spectator.component.html',
  styleUrls: ['./spectator.component.scss']
})
export class SpectatorComponent implements OnInit {
  // importy ze služeb
  summoner: Summoner = null;
  matchHistory: MatchHistory;
  summLeague: SummonerLeague = null;
  spectatorData: SpectatorData;
  matchesDetail: MatchDetail[] = [];

  // settery
  name = '';
  showTabs = false;
  acTab = 0;
  wrongInput = false;
  isLoading: boolean;
  firstTime = true; // ukaž tučňáka => TRUE

  // regiony
  selectedRegion = '';
  regions = [
    { name: 'option1', value: 'RU' },
    { name: 'option2', value: 'KR' },
    { name: 'option3', value: 'BR1' },
    { name: 'option4', value: 'OC1' },
    { name: 'option5', value: 'JP1' },
    { name: 'option6', value: 'NA1' },
    { name: 'option7', value: 'EUN1' },
    { name: 'option8', value: 'EUW1' },
    { name: 'option9', value: 'TR1' },
    { name: 'option10', value: 'LA1' },
    { name: 'option11', value: 'LA2' }
  ];

  // záložky
  links = ['Summoner Detail', 'Match History', 'Spectator'];
  activeLink = this.links[0];

  // úvodní obrázek
  PIC_URL = '../../../assets/pinguin-min.png';

  /**
   * SUMMONER:
   * id: "orkPHmqOIMppb67hPx6trxLvfzLjNWvcnPDmklz39gCF0Ks"
   * accountId: "RdpCc7FvtRjmuE4QmRaMZexFsWgQVld45LmLAaxIeIfqDA"
   * puuid: "mexLQVen2B55-h-1w5GNnV6JlkiSk4ACZTOMTgkVQYd6FquJ22YTCu0kR4BzeiB69MNmK5Oc12T79A"
   * revisionDate: 1581434022000
   * profileIconId: 4220
   * name: "Herdyn"
   * summonerLevel: 119
   */

  constructor(private specService: SpectatorService) {}

  ngOnInit() {
    // TODO: stahovat data o champech jinak nejde spárovat championId s jpg (potřebuji jméno)
  }

  public getSummoner(): void {
    this.matchesDetail = [];
    this.showTabs = false;
    this.isLoading = true;
    this.wrongInput = false;
    this.firstTime = false;

    // získat data o hráči
    console.log('input: ', this.name + ' ' + this.selectedRegion);
    this.specService.getSummonerData(this.name, this.selectedRegion).subscribe(summoner => {
      this.summoner = summoner;
      console.log('summoner: ', this.summoner);

      // získat data o hráčově lize
      this.specService.getSummonerLeague(this.summoner.id, this.selectedRegion).subscribe(league => {
        this.summLeague = league;
        console.log('summoner league: ', this.summLeague);

        // získat data o posledních hrách
        this.specService.getMatchHistory(this.summoner.accountId, this.selectedRegion).subscribe(history => {
          this.matchHistory = history;
          console.log('matchHistory: ', this.matchHistory);

          // získat data o součastné hře
          this.specService.getSpectatorData(this.summoner.id, this.selectedRegion).subscribe(spectator => {
            this.spectatorData = spectator;
            console.log('spectator data: ', this.spectatorData);

            // riot policy kvůli rate limitu (100 per 2 min) redukce na 10
            const matches = this.matchHistory.matches;
            let index = 0;
            for (; index < 10; index++) {
              this.specService.getMatchDetail(matches[index].gameId, this.selectedRegion).subscribe(matchDetail => {
                this.matchesDetail.push(matchDetail);

                if (this.matchesDetail.length === 10) {
                  console.log('matches detail: ', this.matchesDetail);

                  this.isLoading = false;
                  // ukázat taby
                  this.showTabs = this.summoner.id !== undefined ? true : false;
                  // ukázat pozn, že summoner nebyl nalezen
                  this.wrongInput = this.showTabs === false ? true : false;
                }
              });
            }
          });
        });
      });
    });
  }

  // zobrazuje aktivní tab
  activeTab(index: number) {
    this.acTab = index;
  }
}
