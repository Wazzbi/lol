import { ActivityGraphComponent } from './components/activity-graph/activity-graph.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { MatchResult } from './pipes/match-result';
import { MatchType } from './pipes/match-type';
import { LeagueDetailComponent } from './components/league-detail/league-detail.component';
import { LoadingComponent } from './containers/loading/loading.component';
import { MatchHistoryComponent } from './containers/match-history/match-history.component';
import { SummonerDetailComponent } from './containers/summoner-detail/summoner-detail.component';
import { CurrentMatchComponent } from './containers/current-match/current-match.component';
import { SpectatorService } from './services/spectator.service';
import { AppRoutingModule } from './app-routing.module';
import { SpectatorComponent } from './containers/spectator/spectator.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GameDuration } from './pipes/game-duration';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

import {
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatButtonToggleModule,
  MatTabsModule,
  MatSelectModule,
  MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    SpectatorComponent,
    CurrentMatchComponent,
    SummonerDetailComponent,
    MatchHistoryComponent,
    LoadingComponent,
    LeagueDetailComponent,
    MatchType,
    MatchResult,
    ItemDetailComponent,
    GameDuration,
    ActivityGraphComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    ChartsModule
  ],
  providers: [SpectatorService],
  bootstrap: [AppComponent]
})
export class AppModule {}
