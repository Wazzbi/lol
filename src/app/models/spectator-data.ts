export class SpectatorData {
  gameId: number;
  gameStartTime: number;
  platformId: string;
  gameMode: string;
  mapId: number;
  gameType: string;
  gameQueueConfigId: number;
  observers: Observers;
  participants: Participant[];
  gameLength: number;
  bannedChampions: BannedChampion[];
}

export class BannedChampion {
  teamId: number;
  championId: number;
  pickTurn: number;
}

export class Participant {
  profileIconId: number;
  championId: number;
  summonerName: string;
  gameCustomizationObjects: any[];
  bot: boolean;
  perks: Perks;
  spell2Id: number;
  teamId: number;
  spell1Id: number;
  summonerId: string;
}

export class Perks {
  perkStyle: number;
  perkIds: number[];
  perkSubStyle: number;
}

export class Observers {
  encryptionKey: string;
}
