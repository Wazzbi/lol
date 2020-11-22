import { LandingPageComponent } from './containers/landing-page/landing-page.component';
import { SecureImages } from './pipes/secure-images.pipe';
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

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MatchType,
    MatchResult,
    GameDuration,
    SecureImages
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SpectatorService],
  bootstrap: [AppComponent]
})
export class AppModule {}
