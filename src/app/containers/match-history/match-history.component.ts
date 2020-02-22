import { SummonerSpell, SummonerSpells } from './../../models/summoner-spells';
import { ChampList, Champion } from './../../models/champ-list';
import { SpectatorService } from './../../services/spectator.service';
import { MatchDetail, ParticipantIdentity, Participant } from './../../models/match-detail';
import { Component, OnInit, Input } from '@angular/core';
import { MatchHistory } from '../../models/matchHistory';
import { Summoner } from 'src/app/models/summoner';
import { Item, ItemList } from 'src/app/models/item-list';

// někam uklidit do modelů pokud bude potřeba i jinde
export class GameData {
  gameCreation: number;
  gameDuration: number;
  gameType: string;
  gameMode: string;
  summMetaData: ParticipantIdentity;
  summGameData: Participant;
  champName: string;
  icon_url: string;
  spellNames: string[];
  summSpells: string[];
  items: string[];
  itemsData: Item[];
  lane_url: string;
}

@Component({
  selector: 'app-match-history',
  templateUrl: './match-history.component.html',
  styleUrls: ['./match-history.component.scss']
})
export class MatchHistoryComponent implements OnInit {
  @Input() matchesDetail: MatchDetail[];
  @Input() summoner: Summoner;

  summGames: Array<GameData> = [];
  champList: ChampList;
  spellsList: SummonerSpells;
  itemList: ItemList;

  constructor(private specService: SpectatorService) {}

  ngOnInit() {
    //nahrát champ meta data ( přiřadit jméno champa k jeho id)
    this.specService.getChampsData().subscribe(res => {
      this.champList = res;
      console.log('champs recieved: ', this.champList);

      this.specService.getSpellsData().subscribe(res => {
        this.spellsList = res;
        console.log('spells recieved: ', this.spellsList);

        this.specService.getItemsData().subscribe(res => {
          this.itemList = res;
          console.log('items recieved: ', this.itemList);

          this.sortData(this.matchesDetail);
        });
      });
    });
  }

  // TODO: toto musí být servisa....
  // vytvoří object s info pro tvoření tabulky jednodušeji (možná ji ještě očešu)
  sortData(matches: MatchDetail[]) {
    for (const match of matches) {
      let summMetaData = match.participantIdentities.find(obj => obj.player.summonerName === this.summoner.name);
      //console.log('TEST: ', summMetaData);
      let summIndex = summMetaData.participantId;
      let summGameData = match.participants[summIndex - 1]; // participantId je číslováno od č.1 (pole je od č.0...)

      // TODO: toto by šlo určitě taky nějak inteligentně..
      let gameD: GameData = new GameData();

      gameD.gameCreation = match.gameCreation;
      gameD.gameDuration = match.gameDuration;
      gameD.gameType = match.gameType;
      gameD.gameMode = match.gameMode;
      gameD.summMetaData = summMetaData;
      gameD.summGameData = summGameData;
      gameD.champName = this.champName(summGameData);
      gameD.icon_url = this.champIcon_url(summGameData);
      gameD.spellNames = this.summSpellNames(summGameData);
      gameD.summSpells = this.summSpell_url(summGameData);
      gameD.items = this.itemIcons_url(summGameData);
      gameD.itemsData = this.itemDescriptions(summGameData);
      gameD.lane_url = this.laneIcon_url(summGameData);

      this.summGames.push(gameD);
    }
    console.log('summGames: ', this.summGames);
  }

  champIcon_url(summGameData: Participant): string {
    let champId = summGameData.championId;
    let champData = this.champList.data;
    let champName = '';

    Object.keys(champData).find(champ => {
      if (champData[champ].key == champId) {
        champName = champData[champ].id;
      }
    });
    return `http://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/${champName}.png`;
  }

  // TODO: spojit s champIcon_url
  champName(summGameData: Participant): string {
    let champId = summGameData.championId;
    let champData = this.champList.data;
    let champName = '';

    Object.keys(champData).find(champ => {
      if (champData[champ].key == champId) {
        champName = champData[champ].id;
      }
    });
    return champName;
  }

  summSpell_url(summGameData: Participant): string[] {
    let summSpells: number[] = [summGameData.spell1Id, summGameData.spell2Id];
    let spellData = this.spellsList.data;
    let spellNames: string[] = [];

    for (const spell of summSpells) {
      Object.keys(spellData).find(res => {
        if (spellData[res].key == summSpells[summSpells.indexOf(spell)]) {
          let spellName = spellData[res].id;
          spellNames.push(`http://ddragon.leagueoflegends.com/cdn/10.4.1/img/spell/${spellName}.png`);
        }
      });
    }
    return spellNames;
  }

  // TODO: spojit s summSpell_url
  summSpellNames(summGameData: Participant): string[] {
    let summSpells: number[] = [summGameData.spell1Id, summGameData.spell2Id];
    let spellData = this.spellsList.data;
    let spellNames: string[] = [];

    for (const spell of summSpells) {
      Object.keys(spellData).find(res => {
        if (spellData[res].key == summSpells[summSpells.indexOf(spell)]) {
          let spellN = spellData[res].id;
          // otypování na string
          let spellName = String(spellN);
          // vložit jen název kouzla bez "summoner"
          spellNames.push(spellName.substring(8));
        }
      });
    }
    return spellNames;
  }

  // adept na přesun do servisy
  itemIcons_url(summGameData: Participant): string[] {
    let itemIcons: string[] = [];
    for (let index = 0; index < 7; index++) {
      let item = `item${index}`;
      let itemId = summGameData.stats[item];
      itemIcons.push(`http://ddragon.leagueoflegends.com/cdn/10.4.1/img/item/${itemId}.png`);
    }
    return itemIcons;
  }

  itemDescriptions(summGameData: Participant): Item[] {
    let summItems: number[] = [
      summGameData.stats.item0,
      summGameData.stats.item1,
      summGameData.stats.item2,
      summGameData.stats.item3,
      summGameData.stats.item4,
      summGameData.stats.item5,
      summGameData.stats.item6
    ];
    let itemData = this.itemList.data;
    let items: Item[] = [];
    let dummy: Item = {};

    for (const item in summItems) {
      // když item není (summGameData.stats.itemX === 0)
      if (summItems[item] === 0) {
        items.push(dummy);
      } else {
        // jinak najít
        Object.keys(itemData).find(res => {
          if (+res == summItems[item]) {
            items.push(itemData[res]);
          }
        });
      }
    }
    return items;
  }

  laneIcon_url(summGameData: Participant): string {
    let lane = summGameData.timeline.lane;
    let role = summGameData.timeline.role;

    if (lane === 'BOTTOM' && role === 'DUO_SUPPORT') {
      return `../../../assets/ranked-positions/Position_Gold-SUPPORT.png`;
    }

    return `../../../assets/ranked-positions/Position_Gold-${lane}.png`;
  }
}
