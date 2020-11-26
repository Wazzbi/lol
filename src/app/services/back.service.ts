import { SummonerSpell, SummonerSpellList, SummonerSpells } from './../models/summoner-spells';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackService {
  summonerSpellsList: SummonerSpellList;

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<any>('http://localhost/lol/api/dragontail-10.10.5/10.10.3224670/data/en_US/summoner.json')
      .subscribe((ss: SummonerSpells) => { this.summonerSpellsList = ss.data; });
  }

  getChampionIcon(name: string): string {
    return `http://localhost/lol/api/dragontail-10.10.5/10.10.3224670/img/champion/${name}.png`;
  }

  // TODO: udělat obalovou funkci v match detail a v html to zkusit
  getSummonerSpellName(id: number): string {
    console.log('list ', this.summonerSpellsList);
    console.log('id ', id);
    for (const spellName in this.summonerSpellsList) {
      if (this.summonerSpellsList[spellName].key === id.toString()) {
        return this.summonerSpellsList[spellName].name;
      }
    }
  }

}
