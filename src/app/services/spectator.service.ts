import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Summoner } from "../models/summoner";
import { Match } from "./../models/match";

@Injectable({
  providedIn: "root"
})
export class SpectatorService {
  constructor(private httpClient: HttpClient) {}

  SUMMONER_URL = "http://localhost/riotApi/lol/api/summoner.php";
  MATCH_URL = "http://localhost/riotApi/lol/api/match-history.php";

  getSummonerData(name: string): Observable<Summoner> {
    return this.httpClient.post<Summoner>(this.SUMMONER_URL, name);
  }

  getMatchHistory(accID: string): Observable<Match[]> {
    return this.httpClient.post<Match[]>(this.MATCH_URL, accID);
  }
}
