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

  // not include All assets
  dragontailPath = 'dragontail-10.24.1/10.24.1';

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<any>(`http://localhost/lol/api/${this.dragontailPath}/data/en_US/summoner.json`)
      .subscribe(s => { this.summonerSpellsList = s.data; });
    this.httpClient.get<any>(`http://localhost/lol/api/${this.dragontailPath}/data/en_US/item.json`)
      .subscribe(i => { this.itemList = i.data; });
  }

  getChampionIcon(name: string): string {
    return `http://localhost/lol/api/${this.dragontailPath}/img/champion/${name}.png`;
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
    // ! exception somehow riot has second names...
    if (name === 'Ignite') {
      name = 'Dot';
    }
    if (name === 'Ghost') {
      name = 'Haste';
    }
    if (name === 'Cleanse') {
      name = 'Boost';
    }
    if (name === 'Clarity') {
      name = 'Mana';
    }
    if (name === 'Mark') {
      name = 'Snowball';
    }
    return `http://localhost/lol/api/${this.dragontailPath}/img/spell/summoner${name}.png`;
  }

  getQueueData(id: number, data: 'map'|'description'|'notes'): string {
    return queues.find((queue: Queue) => queue.queueId === id)[data];
  }

  // TODO: budu muset zkontrolovat všechny itemy a přemapovat ty co nebudou mít shodu
  getItemIcon(id: number) {
    return `http://localhost/lol/api/${this.dragontailPath}/img/item/${id}.png`;
  }

  // TODO: v budoucnu zde jsou celá metadata itemu
  getItemName(id: number): string {
    if (this.itemList && this.itemList[id] && this.itemList[id].name) {
      return this.itemList[id].name;
    } else {
      return null;
    }
  }

}
