import { LandingPageComponent } from './containers/landing-page/landing-page.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  // { path: 'spectator', component: SpectatorComponent },
  // { path: 'currentMatch', component: CurrentMatchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
