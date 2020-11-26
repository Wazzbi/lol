import { BackService } from './../../services/back.service';
import { Component, Input, OnInit } from '@angular/core';
import { MatchDetail, Participant, Team } from 'src/app/models/match-detail';
import { champions } from '../../../constants';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.scss']
})
export class MatchDetailComponent implements OnInit {
  @Input() summonerId: string;
  @Input() matchDetail: MatchDetail;

  constructor(private backService: BackService) { }

  ngOnInit() {
  }

  get championIcon(): string {
    return this.backService.getChampionIcon(this.playerChampName);
  }

  get playerId(): number {
    return this.matchDetail.participantIdentities.find(p => p.player.summonerId === this.summonerId).participantId;
  }

  get playerData(): Participant {
    return this.matchDetail.participants.find(p => p.participantId === this.playerId);
  }

  get playerChampName(): string {
    const champId = this.matchDetail.participants.find(p => p.participantId === this.playerId).championId;
    return champions[champId];
  }

  get playerTeamData(): Team {
    const playerTeamId = this.matchDetail.participants.find(p => p.participantId === this.playerId).teamId;
    return this.matchDetail.teams.find(team => team.teamId === playerTeamId);
  }

}
