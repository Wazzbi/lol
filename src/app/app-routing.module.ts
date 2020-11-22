import { SummonerComponent } from './containers/summoner/summoner.component';
import { MapsComponent } from './containers/maps/maps.component';
import { ItemsComponent } from './containers/Items/Items.component';
import { SummonersComponent } from './containers/Summoners/Summoners.component';
import { LandingPageComponent } from './containers/landing-page/landing-page.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'summoners', component: SummonersComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'summoner', component: SummonerComponent }
  // { path: '**', component:  } page not found 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
