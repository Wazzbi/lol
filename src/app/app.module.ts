import { MatchResult } from './pipes/match-result';
import { MatchType } from './pipes/match-type';
import { SpectatorService } from './services/spectator.service';
import { AppRoutingModule } from './app-routing.module';
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
    MatchType,
    MatchResult,
    GameDuration
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
