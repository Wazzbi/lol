import { Summoner } from "./../../models/summoner";
import { SpectatorService } from "./../../services/spectator.service";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { from } from "rxjs";
import { promise } from "protractor";

@Component({
  selector: "app-spectator",
  templateUrl: "./spectator.component.html",
  styleUrls: ["./spectator.component.scss"]
})
export class SpectatorComponent implements OnInit {
  summoner$: Observable<Summoner> = null;
  name: string = "";

  constructor(private specService: SpectatorService) {}

  ngOnInit() {}

  public getSummoner(): void {
    this.summoner$ = this.specService.getSummonerData(this.name);
  }
}
