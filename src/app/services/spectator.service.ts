import { MatchDetail } from './../models/match-detail';
import { SpectatorData } from './../models/spectator-data';
import { SummonerLeague } from './../models/summoner-league';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Summoner } from '../models/summoner';
import { Match } from './../models/match';
import { MatchHistory } from '../models/matchHistory';

@Injectable({
  providedIn: 'root'
})
export class SpectatorService {
  constructor(private httpClient: HttpClient) {}

  RIOT_URL = 'http://localhost/riotApi/lol/api/riotApi.php';

  getSummonerData(name: string, region: string): Observable<Summoner> {
    return this.httpClient.post<Summoner>(this.RIOT_URL, `name=${name}&region=${region}&action=getSummonerData`);
  }

  getSummonerLeague(id: string, region: string): Observable<SummonerLeague> {
    return this.httpClient.post<SummonerLeague>(this.RIOT_URL, `id=${id}&region=${region}&action=getSummonerLeague`);
  }

  getMatchHistory(accID: string, region: string): Observable<MatchHistory> {
    return this.httpClient.post<MatchHistory>(this.RIOT_URL, `accID=${accID}&region=${region}&action=getMatchHistory`);
  }

  getSpectatorData(id: string, region: string): Observable<SpectatorData> {
    return this.httpClient.post<SpectatorData>(this.RIOT_URL, `id=${id}&region=${region}&action=getSpectatrData`);
  }
  getMatchDetail(gameId: number, region: string): Observable<MatchDetail> {
    return this.httpClient.post<MatchDetail>(this.RIOT_URL, `gameId=${gameId}&region=${region}&action=getMatchDetail`);
  }
}
