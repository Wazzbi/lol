import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackService {
  constructor(private httpClient: HttpClient){}

  getChampionIcon(name: string): string {
    return `http://localhost/lol/api/dragontail-10.10.5/10.10.3224670/img/champion/${name}.png`;
  }

  // TODO toto by mohl být jen jeden request na začátku a ne při každém volání
  // celý to udělat jako operaci v php
  // private getSummonerSpellsJson(): Observable<any> {
  //   return this.httpClient.get<any>(
  //     'http://localhost/lol/api/dragontail-10.10.5/10.10.3224670/data/en_US/summoner.json');
  // }

  // getSummonerSpellName(id: number): string {
  //   this.getSummonerSpellsJson().
  // }

}
