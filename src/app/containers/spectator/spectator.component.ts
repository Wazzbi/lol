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
  summoner: Summoner = null;
  name: string = "";
  showTabs: boolean = false;
  acTab: Number = 0;
  matchHistory: Match[];

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
    //získat data o hráči
    this.specService.getSummonerData(this.name).subscribe(res => {
      this.summoner = res;
      console.log("summoner: ", this.summoner);
      //ukázat taby
      this.showTabs = true;
      //získat data o posledních hrách
      this.specService
        .getMatchHistory(this.summoner.accountId)
        .subscribe(res => {
          this.matchHistory = res;
          console.log("matchHistory: ", this.matchHistory);
        });
    });
  }

  //zobrazuje aktivní tab
  activeTab(index: number) {
    this.acTab = index;
  }
}
