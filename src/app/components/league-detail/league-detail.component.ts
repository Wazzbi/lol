import { Component, OnInit, Input } from "@angular/core";
import { SummonerLeague } from "src/app/models/summoner-league";

@Component({
  selector: "app-league-detail",
  templateUrl: "./league-detail.component.html",
  styleUrls: ["./league-detail.component.scss"]
})
export class LeagueDetailComponent implements OnInit {
  @Input() summLeague: SummonerLeague[];

  constructor() {}

  ngOnInit() {}

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
