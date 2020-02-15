import { SummonerLeague } from "./../../models/summoner-league";
import { Summoner } from "./../../models/summoner";
import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from "@angular/core";

@Component({
  selector: "app-summoner-detail",
  templateUrl: "./summoner-detail.component.html",
  styleUrls: ["./summoner-detail.component.scss"]
})
export class SummonerDetailComponent implements OnInit {
  @Input() summoner: Summoner;
  @Input() summLeague: SummonerLeague;

  //summLeague: SummonerLeague = null;

  constructor() {}

  ngOnInit() {}

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
  /**
    SUMMONER LEAGUE:
    leagueId: "eb705dc2-0c60-4205-8169-9452a34bc5b2"
    queueType: "RANKED_SOLO_5x5"
    tier: "DIAMOND"
    rank: "I"
    summonerId: "orkPHmqOIMppb67hPx6trxLvfzLjNWvcnPDmklz39gCF0Ks"
    summonerName: "Herdyn"
    leaguePoints: 29
    wins: 114
    losses: 109
    veteran: false
    inactive: false
    freshBlood: false
    hotStreak: false
  */
}
