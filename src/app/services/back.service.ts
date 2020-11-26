import { ItemList } from './../models/item-list';
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
  itemList: ItemList;

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<any>('http://localhost/lol/api/dragontail-10.10.5/10.10.3224670/data/en_US/summoner.json')
      .subscribe(s => { this.summonerSpellsList = s.data; });
    this.httpClient.get<any>('http://localhost/lol/api/dragontail-10.10.5/10.10.3224670/data/en_US/item.json')
      .subscribe(i => { this.itemList = i.data; });
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
  /**
   * @param name
   * @param summonerSpell those spells on keyboard D+F (usually)
   */
  getSpellIcon(name: string, summonerSpell: boolean = false): string {
    // ! exception somehow riot has second name for 'ignite'
    if (name === 'Ignite') {
      name = 'Dot';
    }

    return `http://localhost/lol/api/dragontail-10.10.5/10.10.3224670/img/spell/summoner${name}.png`;
  }

  getQueueData(id: number, data: 'map'|'description'|'notes'): string {
    return queues.find((queue: Queue) => queue.queueId === id)[data];
  }

  getItemIcon(id: number) {
    return `http://localhost/lol/api/dragontail-10.10.5/10.10.3224670/img/item/${id}.png`;
  }

  // TODO: v budoucnu zde jsou celá metadata itemu
  getItemName(id: number): string {
    console.log(id);
    return this.itemList[id].name;
  }

}
