import { ChampList } from './../../models/champ-list';
import { MatchDetail, ParticipantIdentity, Participant } from './../../models/match-detail';
import { SpectatorData } from './../../models/spectator-data';
import { SummonerLeague } from './../../models/summoner-league';
import { Summoner } from './../../models/summoner';
import { SpectatorService } from './../../services/spectator.service';
import { Component, OnInit } from '@angular/core';
import { MatchHistory } from 'src/app/models/matchHistory';
import { Item, ItemList } from 'src/app/models/item-list';
import { SummonerSpells } from 'src/app/models/summoner-spells';

// data pro match history TODO: někam do modelu
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
  selector: 'app-spectator',
  templateUrl: './spectator.component.html',
  styleUrls: ['./spectator.component.scss']
})
export class SpectatorComponent implements OnInit {
  // importy ze služeb
  summoner: Summoner = null;
  matchHistory: MatchHistory;
  summLeague: SummonerLeague = null;
  spectatorData: SpectatorData;
  matchesDetail: MatchDetail[] = [];
  champList: ChampList;

  // settery
  name = '';
  showTabs = false;
  acTab = 0;
  wrongInput = false;
  isLoading: boolean;
  firstTime = true; // ukaž tučňáka => TRUE

  // regiony
  selectedRegion = '';
  regions = [
    { name: 'option1', value: 'RU' },
    { name: 'option2', value: 'KR' },
    { name: 'option3', value: 'BR1' },
    { name: 'option4', value: 'OC1' },
    { name: 'option5', value: 'JP1' },
    { name: 'option6', value: 'NA1' },
    { name: 'option7', value: 'EUN1' },
    { name: 'option8', value: 'EUW1' },
    { name: 'option9', value: 'TR1' },
    { name: 'option10', value: 'LA1' },
    { name: 'option11', value: 'LA2' }
  ];

  // záložky
  links = ['Summoner Detail', 'Match History', 'Spectator'];
  activeLink = this.links[0];

  // úvodní obrázek
  PIC_URL = '../../../assets/pinguin-min.png';

  // proměnné match history
  summGames: Array<GameData> = [];
  spellsList: SummonerSpells;
  itemList: ItemList;

  constructor(private specService: SpectatorService) {}

  ngOnInit() {}

  public getSummoner(): void {
    this.summGames = [];
    this.matchesDetail = [];
    this.showTabs = false;
    this.isLoading = true;
    this.wrongInput = false;
    this.firstTime = false;

    // získat data o hráči
    console.log('input: ', this.name + ' ' + this.selectedRegion);
    this.specService.getSummonerData(this.name, this.selectedRegion).subscribe(summoner => {
      this.summoner = summoner;
      console.log('summoner: ', this.summoner);

      // pokud iniciační data nenačtena vyskočí chyba
      if (this.summoner.id === undefined) {
        this.isLoading = false;
        this.wrongInput = true;
      }

      // získat data o hráčově lize
      this.specService.getSummonerLeague(this.summoner.id, this.selectedRegion).subscribe(league => {
        this.summLeague = league;
        console.log('summoner league: ', this.summLeague);

        // získat data o posledních hrách
        this.specService.getMatchHistory(this.summoner.accountId, this.selectedRegion).subscribe(history => {
          this.matchHistory = history;
          console.log('matchHistory: ', this.matchHistory);

          // získat data o součastné hře
          this.specService.getSpectatorData(this.summoner.id, this.selectedRegion).subscribe(spectator => {
            this.spectatorData = spectator;
            console.log('spectator data: ', this.spectatorData);

            // riot policy kvůli rate limitu (100 per 2 min) redukce na 10
            const matches = this.matchHistory.matches;
            // PODMÍNKA ZDE....
            for (let index = 0; index < 20; index++) {
              this.specService.getMatchDetail(matches[index].gameId, this.selectedRegion).subscribe(matchDetail => {
                this.matchesDetail.push(matchDetail);

                // ... MÁ DOPAD TADY
                if (this.matchesDetail.length === 20) {
                  const games = this.matchesDetail;
                  // sotrovat data od nejmladší hry
                  games.sort((a, b) => b.gameCreation - a.gameCreation);
                  // jen classic hry
                  this.matchesDetail = games.filter(match => match.gameMode === 'CLASSIC');

                  console.log('matches detail: ', this.matchesDetail);

                  this.isLoading = false;
                  // ukázat taby
                  this.showTabs = this.summoner.id !== undefined ? true : false;
                  // ukázat pozn, že summoner nebyl nalezen
                  this.wrongInput = this.showTabs === false ? true : false;

                  ////////////////////////
                  // MATCH HISTORY DATA //
                  ////////////////////////
                  // TODO: logiku načítání dát někam aby proběhla jen jednou a ne pokaždý, když změmím záložku
                  // nahrát champ meta data ( přiřadit jméno champa k jeho id)
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
              });
            }
          });
        });
      });
    });
  }

  // zobrazuje aktivní tab
  activeTab(index: number) {
    this.acTab = index;
  }

  /////////////////////////////
  // MATCH HISTORY FUNCTIONS //
  /////////////////////////////

  // TODO: toto musí být servisa....
  // vytvoří object s info pro tvoření tabulky jednodušeji (možná ji ještě očešu)
  sortData(matches: MatchDetail[]) {
    for (const match of matches) {
      const summMetaData = match.participantIdentities.find(obj => obj.player.summonerName === this.summoner.name);
      // console.log('TEST: ', summMetaData);
      const summIndex = summMetaData.participantId;
      const summGameData = match.participants[summIndex - 1]; // participantId je číslováno od č.1 (pole je od č.0...)

      // TODO: toto by šlo určitě taky nějak inteligentně..
      const gameD: GameData = new GameData();

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
    const champId = summGameData.championId;
    const champData = this.champList.data;
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
    const champId = summGameData.championId;
    const champData = this.champList.data;
    let champName = '';

    Object.keys(champData).find(champ => {
      if (champData[champ].key == champId) {
        champName = champData[champ].id;
      }
    });
    return champName;
  }

  summSpell_url(summGameData: Participant): string[] {
    const summSpells: number[] = [summGameData.spell1Id, summGameData.spell2Id];
    const spellData = this.spellsList.data;
    const spellNames: string[] = [];

    for (const spell of summSpells) {
      Object.keys(spellData).find(res => {
        if (spellData[res].key == summSpells[summSpells.indexOf(spell)]) {
          const spellName = spellData[res].id;
          spellNames.push(`http://ddragon.leagueoflegends.com/cdn/10.4.1/img/spell/${spellName}.png`);
        }
      });
    }
    return spellNames;
  }

  // TODO: spojit s summSpell_url
  summSpellNames(summGameData: Participant): string[] {
    const summSpells: number[] = [summGameData.spell1Id, summGameData.spell2Id];
    const spellData = this.spellsList.data;
    const spellNames: string[] = [];

    for (const spell of summSpells) {
      Object.keys(spellData).find(res => {
        if (spellData[res].key == summSpells[summSpells.indexOf(spell)]) {
          const spellName = spellData[res].name;
          spellNames.push(spellName);
        }
      });
    }
    return spellNames;
  }

  // adept na přesun do servisy
  itemIcons_url(summGameData: Participant): string[] {
    const itemIcons: string[] = [];
    for (let index = 0; index < 7; index++) {
      const item = `item${index}`;
      const itemId = summGameData.stats[item];
      // TODO: vyskokuje v konzoly chyba
      itemIcons.push(`http://ddragon.leagueoflegends.com/cdn/10.4.1/img/item/${itemId}.png`);
    }
    return itemIcons;
  }

  itemDescriptions(summGameData: Participant): Item[] {
    const summItems: number[] = [
      summGameData.stats.item0,
      summGameData.stats.item1,
      summGameData.stats.item2,
      summGameData.stats.item3,
      summGameData.stats.item4,
      summGameData.stats.item5,
      summGameData.stats.item6
    ];
    const itemData = this.itemList.data;
    const items: Item[] = [];
    const dummy: Item = {};

    for (const item in summItems) {
      // když item není (summGameData.stats.itemX === 0) a nebo byl vymazán ze seznamu
      if (summItems[item] === 0 || !itemData.hasOwnProperty(summItems[item])) {
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
    const lane = summGameData.timeline.lane;
    const role = summGameData.timeline.role;

    if (lane === 'BOTTOM' && role === 'DUO_SUPPORT') {
      return `../../../assets/ranked-positions/Position_Gold-SUPPORT.png`;
    }
    if (lane === 'NONE' && role === 'DUO_SUPPORT') {
      return `../../../assets/ranked-positions/Position_Gold-SUPPORT.png`;
    }
    if (lane === 'NONE' && role === 'DUO') {
      return `../../../assets/ranked-positions/Position_Gold-BOTTOM.png`;
    }

    return `../../../assets/ranked-positions/Position_Gold-${lane}.png`;
  }
}
