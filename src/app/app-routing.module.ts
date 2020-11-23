import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
// COMPONENTS
import { BegginersComponent } from './containers/begginers/begginers.component';
import { BuildsComponent } from './containers/builds/builds.component';
import { PatchNotesComponent } from './containers/patch-notes/patch-notes.component';
import { SummonerComponent } from './containers/summoner/summoner.component';
import { MapsComponent } from './containers/maps/maps.component';
import { ItemsComponent } from './containers/Items/Items.component';
import { SummonersComponent } from './containers/Summoners/Summoners.component';
import { LandingPageComponent } from './containers/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent, data: {animation: 'LandingPage'} },
  { path: 'summoners', component: SummonersComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'summoner', component: SummonerComponent, data: {animation: 'SummonerPage'} },
  { path: 'patch', component: PatchNotesComponent },
  { path: 'builds', component: BuildsComponent },
  { path: 'begginers', component: BegginersComponent }
  // { path: '**', component:  } page not found 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
