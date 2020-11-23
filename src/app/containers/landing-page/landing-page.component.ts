import { AppState } from 'src/app/models/app-state';
import { regions } from '../../../constants';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { addSummoner, addSummonerRegion } from '../../state/app.actions';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  regions = regions;

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) {}

  searchPlayer(nickname: string, region: string): void {
    this.store.dispatch(addSummonerRegion({region}))
    this.store.dispatch(addSummoner({nickname, region}));
    this.router.navigate(['/summoner']);
  }

}
