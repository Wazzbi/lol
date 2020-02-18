import { Component, OnInit, Input } from '@angular/core';
import { MatchHistory } from '../../models/matchHistory';

@Component({
  selector: 'app-match-history',
  templateUrl: './match-history.component.html',
  styleUrls: ['./match-history.component.scss']
})
export class MatchHistoryComponent implements OnInit {
  @Input() matchHistory: MatchHistory;

  /* MATCHHISTORY:
    matches: Match[];
    startIndex: number;
    endIndex: number;
    totalGames: number;
   */

  constructor() {}

  ngOnInit() {}
}
