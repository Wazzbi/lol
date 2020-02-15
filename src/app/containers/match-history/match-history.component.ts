import { Match } from "./../../models/match";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-match-history",
  templateUrl: "./match-history.component.html",
  styleUrls: ["./match-history.component.css"]
})
export class MatchHistoryComponent implements OnInit {
  @Input() matchHistory: Match[];

  /**
    MATCH:
    platformId: "EUN1"
    gameId: 2382159344
    champion: 11
    queue: 420
    season: 13
    timestamp: 1581719043879
    role: "DUO_SUPPORT"
    lane: "MID"
  */

  constructor() {}

  ngOnInit() {}
}
