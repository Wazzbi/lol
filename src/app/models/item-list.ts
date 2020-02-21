interface ItemList {
  type: string;
  version: string;
  basic: Basic;
  data: Data;
  groups: Group[];
  tree: Tree[];
}

interface Tree {
  header: string;
  tags: string[];
}

interface Group {
  id: string;
  MaxGroupOwnable: string;
}

interface Data {
  '1001': Item;
  '1004': Item;
  '1006': Item;
  '1011': Item;
  '1018': Item;
  '1026': Item;
  '1027': Item;
  '1028': Item;
  '1029': Item;
  '1031': Item;
  '1033': Item;
  '1036': Item;
  '1037': Item;
  '1038': Item;
  '1039': Item;
  '1041': Item;
  '1042': Item;
  '1043': Item;
  '1052': Item;
  '1053': Item;
  '1054': Item;
  '1055': Item;
  '1056': Item;
  '1057': Item;
  '1058': Item;
  '1082': Item;
  '1083': Item;
  '1400': Item;
  '1401': Item;
  '1402': Item;
  '1412': Item;
  '1413': Item;
  '1414': Item;
  '1416': Item;
  '1419': Item;
  '2003': Item;
  '2006': Item;
  '2009': Item;
  '2010': Item;
  '2015': Item;
  '2031': Item;
  '2033': Item;
  '2047': Item;
  '2051': Item;
  '2052': Item;
  '2054': Item;
  '2055': Item;
  '2065': Item;
  '2138': Item;
  '2139': Item;
  '2140': Item;
  '2403': Item;
  '2419': Item;
  '2420': Item;
  '2421': Item;
  '2422': Item;
  '2423': Item;
  '2424': Item;
  '3001': Item;
  '3003': Item;
  '3004': Item;
  '3006': Item;
  '3007': Item;
  '3008': Item;
  '3009': Item;
  '3010': Item;
  '3020': Item;
  '3022': Item;
  '3024': Item;
  '3025': Item;
  '3026': Item;
  '3027': Item;
  '3028': Item;
  '3029': Item;
  '3030': Item;
  '3031': Item;
  '3033': Item;
  '3035': Item;
  '3036': Item;
  '3040': Item;
  '3041': Item;
  '3042': Item;
  '3043': Item;
  '3044': Item;
  '3046': Item;
  '3047': Item;
  '3048': Item;
  '3050': Item;
  '3052': Item;
  '3053': Item;
  '3057': Item;
  '3065': Item;
  '3067': Item;
  '3068': Item;
  '3070': Item;
  '3071': Item;
  '3072': Item;
  '3073': Item;
  '3074': Item;
  '3075': Item;
  '3076': Item;
  '3077': Item;
  '3078': Item;
  '3082': Item;
  '3083': Item;
  '3084': Item;
  '3085': Item;
  '3086': Item;
  '3087': Item;
  '3089': Item;
  '3091': Item;
  '3094': Item;
  '3095': Item;
  '3100': Item;
  '3101': Item;
  '3102': Item;
  '3105': Item;
  '3107': Item;
  '3108': Item;
  '3109': Item;
  '3110': Item;
  '3111': Item;
  '3112': Item;
  '3113': Item;
  '3114': Item;
  '3115': Item;
  '3116': Item;
  '3117': Item;
  '3123': Item;
  '3124': Item;
  '3133': Item;
  '3134': Item;
  '3135': Item;
  '3136': Item;
  '3137': Item;
  '3139': Item;
  '3140': Item;
  '3142': Item;
  '3143': Item;
  '3144': Item;
  '3145': Item;
  '3146': Item;
  '3147': Item;
  '3151': Item;
  '3152': Item;
  '3153': Item;
  '3155': Item;
  '3156': Item;
  '3157': Item;
  '3158': Item;
  '3161': Item;
  '3165': Item;
  '3174': Item;
  '3175': Item;
  '3179': Item;
  '3181': Item;
  '3184': Item;
  '3190': Item;
  '3191': Item;
  '3193': Item;
  '3194': Item;
  '3196': Item;
  '3197': Item;
  '3198': Item;
  '3200': Item;
  '3211': Item;
  '3222': Item;
  '3285': Item;
  '3340': Item;
  '3348': Item;
  '3361': Item;
  '3362': Item;
  '3363': Item;
  '3364': Item;
  '3371': Item;
  '3373': Item;
  '3374': Item;
  '3379': Item;
  '3380': Item;
  '3382': Item;
  '3383': Item;
  '3384': Item;
  '3386': Item;
  '3387': Item;
  '3388': Item;
  '3389': Item;
  '3390': Item;
  '3400': Item;
  '3410': Item;
  '3416': Item;
  '3422': Item;
  '3455': Item;
  '3504': Item;
  '3508': Item;
  '3513': Item;
  '3514': Item;
  '3520': Item;
  '3599': Item;
  '3600': Item;
  '3671': Item;
  '3672': Item;
  '3673': Item;
  '3675': Item;
  '3680': Item;
  '3681': Item;
  '3682': Item;
  '3683': Item;
  '3684': Item;
  '3685': Item;
  '3690': Item;
  '3691': Item;
  '3692': Item;
  '3693': Item;
  '3694': Item;
  '3695': Item;
  '3706': Item;
  '3715': Item;
  '3742': Item;
  '3748': Item;
  '3751': Item;
  '3800': Item;
  '3801': Item;
  '3802': Item;
  '3812': Item;
  '3814': Item;
  '3850': Item;
  '3851': Item;
  '3853': Item;
  '3854': Item;
  '3855': Item;
  '3857': Item;
  '3858': Item;
  '3859': Item;
  '3860': Item;
  '3862': Item;
  '3863': Item;
  '3864': Item;
  '3901': Item;
  '3902': Item;
  '3903': Item;
  '3905': Item;
  '3907': Item;
  '3916': Item;
}

interface Item {
  name?: string;
  description?: string;
  colloq?: string;
  plaintext?: string;
  stacks?: number;
  from?: string[];
  into?: string[];
  image?: Image;
  gold?: Gold;
  tags?: string[];
  maps?: Partial<Maps>;
  stats?: Partial<Stats>;
  effect?: Partial<Effect>;
  depth?: number;
}

interface Effect {
  Effect1Amount: string;
  Effect2Amount: string;
  Effect3Amount: string;
  Effect4Amount: string;
  Effect5Amount: string;
  Effect6Amount: string;
  Effect7Amount: string;
  Effect8Amount: string;
  Effect9Amount: string;
  Effect10Amount: string;
  Effect11Amount: string;
  Effect12Amount: string;
  Effect13Amount: string;
  Effect14Amount: string;
  Effect15Amount: string;
  Effect16Amount: string;
  Effect17Amount: string;
  Effect18Amount: string;
  Effect19Amount: string;
  Effect20Amount: string;
  Effect21Amount: string;
  Effect22Amount: string;
  Effect23Amount: string;
  Effect24Amount: string;
  Effect25Amount: string;
  Effect26Amount: string;
  Effect27Amount: string;
}

interface Image {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

interface Basic {
  name: string;
  rune: Rune;
  gold: Gold;
  group: string;
  description: string;
  colloq: string;
  plaintext: string;
  consumed: boolean;
  stacks: number;
  depth: number;
  consumeOnFull: boolean;
  from: any[];
  into: any[];
  specialRecipe: number;
  inStore: boolean;
  hideFromAll: boolean;
  requiredChampion: string;
  requiredAlly: string;
  stats: Stats;
  tags: any[];
  maps: Maps;
}

interface Maps {
  '1': boolean;
  '8': boolean;
  '10': boolean;
  '12': boolean;
}

interface Stats {
  FlatHPPoolMod: number;
  rFlatHPModPerLevel: number;
  FlatMPPoolMod: number;
  rFlatMPModPerLevel: number;
  PercentHPPoolMod: number;
  PercentMPPoolMod: number;
  FlatHPRegenMod: number;
  rFlatHPRegenModPerLevel: number;
  PercentHPRegenMod: number;
  FlatMPRegenMod: number;
  rFlatMPRegenModPerLevel: number;
  PercentMPRegenMod: number;
  FlatArmorMod: number;
  rFlatArmorModPerLevel: number;
  PercentArmorMod: number;
  rFlatArmorPenetrationMod: number;
  rFlatArmorPenetrationModPerLevel: number;
  rPercentArmorPenetrationMod: number;
  rPercentArmorPenetrationModPerLevel: number;
  FlatPhysicalDamageMod: number;
  rFlatPhysicalDamageModPerLevel: number;
  PercentPhysicalDamageMod: number;
  FlatMagicDamageMod: number;
  rFlatMagicDamageModPerLevel: number;
  PercentMagicDamageMod: number;
  FlatMovementSpeedMod: number;
  rFlatMovementSpeedModPerLevel: number;
  PercentMovementSpeedMod: number;
  rPercentMovementSpeedModPerLevel: number;
  FlatAttackSpeedMod: number;
  PercentAttackSpeedMod: number;
  rPercentAttackSpeedModPerLevel: number;
  rFlatDodgeMod: number;
  rFlatDodgeModPerLevel: number;
  PercentDodgeMod: number;
  FlatCritChanceMod: number;
  rFlatCritChanceModPerLevel: number;
  PercentCritChanceMod: number;
  FlatCritDamageMod: number;
  rFlatCritDamageModPerLevel: number;
  PercentCritDamageMod: number;
  FlatBlockMod: number;
  PercentBlockMod: number;
  FlatSpellBlockMod: number;
  rFlatSpellBlockModPerLevel: number;
  PercentSpellBlockMod: number;
  FlatEXPBonus: number;
  PercentEXPBonus: number;
  rPercentCooldownMod: number;
  rPercentCooldownModPerLevel: number;
  rFlatTimeDeadMod: number;
  rFlatTimeDeadModPerLevel: number;
  rPercentTimeDeadMod: number;
  rPercentTimeDeadModPerLevel: number;
  rFlatGoldPer10Mod: number;
  rFlatMagicPenetrationMod: number;
  rFlatMagicPenetrationModPerLevel: number;
  rPercentMagicPenetrationMod: number;
  rPercentMagicPenetrationModPerLevel: number;
  FlatEnergyRegenMod: number;
  rFlatEnergyRegenModPerLevel: number;
  FlatEnergyPoolMod: number;
  rFlatEnergyModPerLevel: number;
  PercentLifeStealMod: number;
  PercentSpellVampMod: number;
}

interface Gold {
  base: number;
  total: number;
  sell: number;
  purchasable: boolean;
}

interface Rune {
  isrune: boolean;
  tier: number;
  type: string;
}
