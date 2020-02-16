import { SpectatorData } from "./../models/spectator-data";
import { SummonerLeague } from "./../models/summoner-league";
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
  SUMM_LEAGUE_URL = "http://localhost/riotApi/lol/api/summoner-league.php";
  SPECTATOR_URL = "http://localhost/riotApi/lol/api/spectator.php";

  getSummonerData(name: string, region: string): Observable<Summoner> {
    return this.httpClient.post<Summoner>(
      this.SUMMONER_URL,
      `name=${name}&region=${region}`
    );
  }

  getSummonerLeague(id: string, region: string): Observable<SummonerLeague> {
    return this.httpClient.post<SummonerLeague>(
      this.SUMM_LEAGUE_URL,
      `id=${id}&region=${region}`
    );
  }

  getMatchHistory(accID: string, region: string): Observable<Match[]> {
    return this.httpClient.post<Match[]>(
      this.MATCH_URL,
      `accID=${accID}&region=${region}`
    );
  }

  getSpectatrData(id: string, region: string): Observable<SpectatorData> {
    return this.httpClient.post<SpectatorData>(
      this.SPECTATOR_URL,
      `id=${id}&region=${region}`
    );
  }
}
