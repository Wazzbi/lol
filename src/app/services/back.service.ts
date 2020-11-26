import { SummonerSpell, SummonerSpellList, SummonerSpells } from './../models/summoner-spells';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { queues } from '../../constants';
import { Queue } from '../models/queue';

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

  getSummonerSpellName(id: number): string {
    for (const spellName in this.summonerSpellsList) {
      if (this.summonerSpellsList[spellName].key === id.toString()) {
        return this.summonerSpellsList[spellName].name;
      }
    }
  }

  getSummonerSpellIcon(name: string): string {
    // ! exception somehow riot has second name for 'ignite'
    if (name === 'Ignite') {
      name = 'Dot';
    }

    return `http://localhost/lol/api/dragontail-10.10.5/10.10.3224670/img/spell/summoner${name}.png`;
  }

  getQueueData(id: number, data: 'map'|'description'|'notes'): string {
    return queues.find((queue: Queue) => queue.queueId === id)[data];
  }

}
