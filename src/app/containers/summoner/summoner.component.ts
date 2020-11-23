import { Observable } from 'rxjs';
import { Summoner } from './../../models/summoner';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSummoner } from 'src/app/state/app.selectors';
import { State } from 'src/app/models/state';

@Component({
  selector: 'app-summoner',
  templateUrl: './summoner.component.html',
  styleUrls: ['./summoner.component.scss']
})
export class SummonerComponent implements OnInit {
  summoner$: Observable<Summoner>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.summoner$ = this.store.select(selectSummoner);
    this.summoner$.subscribe(d => console.log(d));
  }

}
