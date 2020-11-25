import { BackService } from './services/back.service';
import { environment } from './../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
// SERVICE
import { SpectatorService } from './services/spectator.service';
// PIPES
import { SecureImages } from './pipes/secure-images.pipe';
import { MatchResult } from './pipes/match-result';
import { MatchType } from './pipes/match-type';
import { GameDuration } from './pipes/game-duration';
// COMPONENTS
import { SummonerComponent } from './containers/summoner/summoner.component';
import { MapsComponent } from './containers/maps/maps.component';
import { CardComponent } from './components/card/card.component';
import { LandingPageComponent } from './containers/landing-page/landing-page.component';
import { NavbarComponent } from './containers/navbar/navbar.component';
import { BeginnersComponent } from './containers/beginners/beginners.component';
import { BuildsComponent } from './containers/builds/builds.component';
import { PatchNotesComponent } from './containers/patch-notes/patch-notes.component';
import { SummonersComponent } from './containers/summoners/summoners.component';
import { ItemsComponent } from './containers/items/items.component';
// NGRX
import { StoreModule } from '@ngrx/store';
import { appReducer } from './state/app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './state/app.effects';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CardComponent,
    ItemsComponent,
    SummonersComponent,
    MapsComponent,
    SummonerComponent,
    NavbarComponent,
    PatchNotesComponent,
    BuildsComponent,
    BeginnersComponent,

    // PIPES
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
    HttpClientModule,
    InfiniteScrollModule,

    // NGRX
    StoreModule.forRoot({ appState: appReducer }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [SpectatorService, BackService],
  bootstrap: [AppComponent]
})
export class AppModule {}
