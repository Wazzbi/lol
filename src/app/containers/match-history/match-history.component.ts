import { Match } from "./../../models/match";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-match-history",
  templateUrl: "./match-history.component.html",
  styleUrls: ["./match-history.component.css"]
})
export class MatchHistoryComponent implements OnInit {
  @Input() matchHistory: Match[];

  test = [1, 2, 3, 4, 5];

  constructor() {}

  ngOnInit() {}
}
