import { CurrentMatchComponent } from "./containers/current-match/current-match.component";
import { SpectatorComponent } from "./containers/spectator/spectator.component";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

const routes: Routes = [
  { path: "", redirectTo: "/spectator", pathMatch: "full" },
  { path: "spectator", component: SpectatorComponent },
  { path: "currentMatch", component: CurrentMatchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
