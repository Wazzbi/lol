import { SpectatorComponent } from "./containers/spectator/spectator.component";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

const routes: Routes = [
  { path: "", redirectTo: "/spectator", pathMatch: "full" },
  { path: "spectator", component: SpectatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
