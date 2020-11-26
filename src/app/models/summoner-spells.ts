export class SummonerSpells {
  type: string;
  version: string;
  data: SummonerSpellList;
}

export class SummonerSpellList {
  SummonerBarrier: SummonerSpell;
  SummonerBoost: SummonerSpell;
  SummonerDot: SummonerSpell;
  SummonerExhaust: SummonerSpell;
  SummonerFlash: SummonerSpell;
  SummonerHaste: SummonerSpell;
  SummonerHeal: SummonerSpell;
  SummonerMana: SummonerSpell;
  SummonerPoroRecall: SummonerSpell;
  SummonerPoroThrow: SummonerSpell;
  SummonerSmite: SummonerSpell;
  SummonerSnowURFSnowball_Mark: SummonerSpell;
  SummonerSnowball: SummonerSpell;
  SummonerTeleport: SummonerSpell;
}

export class Var2 {
  link: string;
  coeff: number[];
  key: string;
}

export class Var {
  link: string;
  coeff: number;
  key: string;
}

export class SummonerSpell {
  id: string;
  name: string;
  description: string;
  tooltip: string;
  maxrank: number;
  cooldown: number[];
  cooldownBurn: string;
  cost: number[];
  costBurn: string;
  datavalues: Datavalues;
  effect: (number[] | null)[];
  effectBurn: (null | string)[];
  vars: any[];
  key: string;
  summonerLevel: number;
  modes: string[];
  costType: string;
  maxammo: string;
  range: number[];
  rangeBurn: string;
  image: Image;
  resource: string;
}

export class Image {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

export class Datavalues {}
