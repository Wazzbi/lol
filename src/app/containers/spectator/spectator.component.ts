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
