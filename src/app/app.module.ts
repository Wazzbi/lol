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
  MatIconModule
} from "@angular/material";

@NgModule({
  declarations: [AppComponent, SpectatorComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    HttpModule
  ],
  providers: [SpectatorService],
  bootstrap: [AppComponent]
})
export class AppModule {}
