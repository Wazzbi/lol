import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { SpectatorService } from 'src/app/services/spectator.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(private riotApi: SpectatorService) {}

  ngOnInit(): void {
    // ! ONLY TEST
    this.riotApi.getSummonerData('herdyn', 'EUN1').subscribe(d => console.log(d));
  }

}
