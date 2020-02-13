import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Summoner } from "../models/summoner";

@Injectable({
  providedIn: "root"
})
export class SpectatorService {
  constructor(private httpClient: HttpClient) {}

  URL = "http://localhost/riotApi/lol/api/riot.php";

  getSummonerData(name: string): Observable<Summoner> {
    return this.httpClient.post<Summoner>(this.URL, name);
  }
}
