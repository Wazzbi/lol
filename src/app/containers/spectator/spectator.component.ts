import { SpectatorData } from "./../../models/spectator-data";
import { SummonerLeague } from "./../../models/summoner-league";
import { Match } from "./../../models/match";
import { Summoner } from "./../../models/summoner";
import { SpectatorService } from "./../../services/spectator.service";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-spectator",
  templateUrl: "./spectator.component.html",
  styleUrls: ["./spectator.component.scss"]
})
export class SpectatorComponent implements OnInit {
  //importy ze služeb
  summoner: Summoner = null;
  matchHistory: Match[];
  summLeague: SummonerLeague = null;
  spectatorData: SpectatorData;

  //settery
  name: string = "";
  showTabs: boolean = false;
  acTab: Number = 0;
  wrongInput: boolean = false;
  isLoading: boolean;

  //regiony
  selectedRegion = "";
  regions = [
    { name: "option1", value: "RU" },
    { name: "option2", value: "KR" },
    { name: "option3", value: "BR1" },
    { name: "option4", value: "OC1" },
    { name: "option5", value: "JP1" },
    { name: "option6", value: "NA1" },
    { name: "option7", value: "EUN1" },
    { name: "option8", value: "EUW1" },
    { name: "option9", value: "TR1" },
    { name: "option10", value: "LA1" },
    { name: "option11", value: "LA2" }
  ];

  //záložky
  links = ["Summoner Detail", "Match History", "Spectator"];
  activeLink = this.links[0];

  /**
    SUMMONER:
    id: "orkPHmqOIMppb67hPx6trxLvfzLjNWvcnPDmklz39gCF0Ks"
    accountId: "RdpCc7FvtRjmuE4QmRaMZexFsWgQVld45LmLAaxIeIfqDA"
    puuid: "mexLQVen2B55-h-1w5GNnV6JlkiSk4ACZTOMTgkVQYd6FquJ22YTCu0kR4BzeiB69MNmK5Oc12T79A"
    name: "Herdyn"
    profileIconId: 4220
    revisionDate: 1581434022000
    summonerLevel: 119
  */

  constructor(private specService: SpectatorService) {}

  ngOnInit() {}

  public getSummoner(): void {
    this.showTabs = false;
    this.isLoading = true;
    this.wrongInput = false;

    //získat data o hráči
    console.log("input: ", this.name + " " + this.selectedRegion);
    this.specService
      .getSummonerData(this.name, this.selectedRegion)
      .subscribe(res => {
        this.summoner = res;
        console.log("summoner: ", this.summoner);

        //získat data o hráčově lize
        this.specService
          .getSummonerLeague(this.summoner.id, this.selectedRegion)
          .subscribe(res => {
            this.summLeague = res;
            console.log("summoner league: ", this.summLeague);

            //získat data o posledních hrách
            this.specService
              .getMatchHistory(this.summoner.accountId, this.selectedRegion)
              .subscribe(res => {
                this.matchHistory = res;
                console.log("matchHistory: ", this.matchHistory);

                //získat data o součastné hře
                this.specService
                  .getSpectatrData(this.summoner.id, this.selectedRegion)
                  .subscribe(res => {
                    this.spectatorData = res;
                    console.log("spectator data: ", this.spectatorData);

                    this.isLoading = false;
                    //ukázat taby
                    this.showTabs =
                      this.summoner.id !== undefined ? true : false;
                    //ukázat pozn, že summoner nebyl nalezen
                    this.wrongInput = this.showTabs === false ? true : false;
                  });
              });
          });
      });
  }

  //zobrazuje aktivní tab
  activeTab(index: number) {
    this.acTab = index;
  }
}
