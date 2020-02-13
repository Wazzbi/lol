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
  acTab: Number = 0;

  links = [
    {
      label: "First",
      index: "1"
      //path: "/currentMatch"
    },
    {
      label: "Second",
      index: "2"
      //path: "/currentMatch"
    },
    {
      label: "Third",
      index: "3"
      //path: "/currentMatch"
    }
  ];
  activeLink = this.links[0];

  constructor(private specService: SpectatorService) {}

  ngOnInit() {}

  public getSummoner(): void {
    this.summoner$ = this.specService.getSummonerData(this.name);
    if (this.summoner$ !== null) {
      this.showTabs = true;
    }
  }

  activeTab(index: number) {
    this.acTab = index;
  }
}
