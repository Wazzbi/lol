import { LeagueDetailComponent } from "./components/league-detail/league-detail.component";
import { LoadingComponent } from "./containers/loading/loading.component";
import { MatchHistoryComponent } from "./containers/match-history/match-history.component";
import { SummonerDetailComponent } from "./containers/summoner-detail/summoner-detail.component";
import { CurrentMatchComponent } from "./containers/current-match/current-match.component";
import { SpectatorService } from "./services/spectator.service";
import { AppRoutingModule } from "./app-routing.module";
import { SpectatorComponent } from "./containers/spectator/spectator.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";

import {
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatButtonToggleModule,
  MatTabsModule,
  MatSelectModule,
  MatProgressSpinnerModule
} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    SpectatorComponent,
    CurrentMatchComponent,
    SummonerDetailComponent,
    MatchHistoryComponent,
    LoadingComponent,
    LeagueDetailComponent
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
    HttpModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ],
  providers: [SpectatorService],
  bootstrap: [AppComponent]
})
export class AppModule {}
