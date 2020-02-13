import { Summoner } from "./../../models/summoner";
import { SpectatorService } from "./../../services/spectator.service";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-spectator",
  templateUrl: "./spectator.component.html",
  styleUrls: ["./spectator.component.scss"]
})
export class SpectatorComponent implements OnInit {
  summoner$: Observable<Summoner> = null;
  name: string = "";
  showTabs: boolean = false;

  links = ["First", "Second", "Third"];
  activeLink = this.links[0];

  constructor(private specService: SpectatorService) {}

  ngOnInit() {}

  public getSummoner(): void {
    this.summoner$ = this.specService.getSummonerData(this.name);
    if (this.summoner$ !== null) {
      this.showTabs = true;
    }
  }
}
