import { SpectatorData } from './../../models/spectator-data';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-current-match',
  templateUrl: './current-match.component.html',
  styleUrls: ['./current-match.component.scss']
})
export class CurrentMatchComponent implements OnInit {
  @Input() spectatorData: SpectatorData;

  constructor() {}

  ngOnInit() {}

  /*   {
    "gameId": 2382755175,
    "gameStartTime": 0,
    "platformId": "EUN1",
    "gameMode": "CLASSIC",
    "mapId": 11,
    "gameType": "MATCHED_GAME",
    "gameQueueConfigId": 420,
    "observers": {
        "encryptionKey": "kG/besdwkoZDainK4YAl7zyKLS6clSV3"
    },
    "participants": [
        {
            "profileIconId": 550,
            "championId": 38,
            "summonerName": "Reformed Raiich",
            "gameCustomizationObjects": [],
            "bot": false,
            "perks": {
                "perkStyle": 8000,
                "perkIds": [
                    8021,
                    8009,
                    9105,
                    8014,
                    8139,
                    8135,
                    5008,
                    5008,
                    5003
                ],
                "perkSubStyle": 8100
            },
            "spell2Id": 14,
            "teamId": 100,
            "spell1Id": 4,
            "summonerId": "4zVpPvB7S3oo48rcd6wNCziVBj_7TOabjIJJ87-8KMTRFXs"
        }, */
}
