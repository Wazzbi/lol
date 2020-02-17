import { SummonerLeague } from "./../../models/summoner-league";
import { Summoner } from "./../../models/summoner";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-summoner-detail",
  templateUrl: "./summoner-detail.component.html",
  styleUrls: ["./summoner-detail.component.scss"]
})
export class SummonerDetailComponent implements OnInit {
  @Input() summoner: Summoner;
  @Input() summLeague: SummonerLeague[];

  icon_URL: string;

  constructor() {}

  ngOnInit() {
    this.icon_URL = `http://ddragon.leagueoflegends.com/cdn/10.3.1/img/profileicon/${this.summoner.profileIconId}.png`;
  }

  /**
    ngOnChanges(changes: SimpleChanges): void {
    console.log("onchanges: ", this.summLeague);
    //this.ngOnInit();
    }
  */
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
}
