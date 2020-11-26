// static from https://developer.riotgames.com/docs/lol
export const regions = [
    'BR1',
    'EUN1',
    'EUW1',
    'JP1',
    'KR',
    'LA1',
    'LA2',
    'NA1',
    'OC1',
    'RU',
    'TR1'
];
//  dragontail...championFull.json
export const champions = {
    266: 'Aatrox',
    103: 'Ahri',
    84: 'Akali',
    12: 'Alistar',
    32: 'Amumu',
    34: 'Anivia',
    1: 'Annie',
    523: 'Aphelios',
    22: 'Ashe',
    136: 'AurelionSol',
    268: 'Azir',
    432: 'Bard',
    53: 'Blitzcrank',
    63: 'Brand',
    201: 'Braum',
    51: 'Caitlyn',
    164: 'Camille',
    69: 'Cassiopeia',
    31: 'Chogath',
    42: 'Corki',
    122: 'Darius',
    131: 'Diana',
    119: 'Draven',
    36: 'DrMundo',
    245: 'Ekko',
    60: 'Elise',
    28: 'Evelynn',
    81: 'Ezreal',
    9: 'Fiddlesticks',
    114: 'Fiora',
    105: 'Fizz',
    3: 'Galio',
    41: 'Gangplank',
    86: 'Garen',
    150: 'Gnar',
    79: 'Gragas',
    104: 'Graves',
    120: 'Hecarim',
    74: 'Heimerdinger',
    420: 'Illaoi',
    39: 'Irelia',
    427: 'Ivern',
    40: 'Janna',
    59: 'JarvanIV',
    24: 'Jax',
    126: 'Jayce',
    202: 'Jhin',
    222: 'Jinx',
    145: 'Kaisa',
    429: 'Kalista',
    43: 'Karma',
    30: 'Karthus',
    38: 'Kassadin',
    55: 'Katarina',
    10: 'Kayle',
    141: 'Kayn',
    85: 'Kennen',
    121: 'Khazix',
    203: 'Kindred',
    240: 'Kled',
    96: 'KogMaw',
    7: 'Leblanc',
    64: 'LeeSin',
    89: 'Leona',
    127: 'Lissandra',
    236: 'Lucian',
    117: 'Lulu',
    99: 'Lux',
    54: 'Malphite',
    90: 'Malzahar',
    57: 'Maokai',
    11: 'MasterYi',
    21: 'MissFortune',
    62: 'MonkeyKing',
    82: 'Mordekaiser',
    25: 'Morgana',
    267: 'Nami',
    75: 'Nasus',
    111: 'Nautilus',
    518: 'Neeko',
    76: 'Nidalee',
    56: 'Nocturne',
    20: 'Nunu',
    2: 'Olaf',
    61: 'Orianna',
    516: 'Ornn',
    80: 'Pantheon',
    78: 'Poppy',
    555: 'Pyke',
    246: 'Qiyana',
    133: 'Quinn',
    497: 'Rakan',
    33: 'Rammus',
    421: 'RekSai',
    58: 'Renekton',
    107: 'Rengar',
    92: 'Riven',
    68: 'Rumble',
    13: 'Ryze',
    113: 'Sejuani',
    235: 'Senna',
    875: 'Sett',
    35: 'Shaco',
    98: 'Shen',
    102: 'Shyvana',
    27: 'Singed',
    14: 'Sion',
    15: 'Sivir',
    72: 'Skarner',
    37: 'Sona',
    16: 'Soraka',
    50: 'Swain',
    517: 'Sylas',
    134: 'Syndra',
    223: 'TahmKench',
    163: 'Taliyah',
    91: 'Talon',
    44: 'Taric',
    17: 'Teemo',
    412: 'Thresh',
    18: 'Tristana',
    48: 'Trundle',
    23: 'Tryndamere',
    4: 'TwistedFate',
    29: 'Twitch',
    77: 'Udyr',
    6: 'Urgot',
    110: 'Varus',
    67: 'Vayne',
    45: 'Veigar',
    161: 'Velkoz',
    254: 'Vi',
    112: 'Viktor',
    8: 'Vladimir',
    106: 'Volibear',
    19: 'Warwick',
    498: 'Xayah',
    101: 'Xerath',
    5: 'XinZhao',
    157: 'Yasuo',
    83: 'Yorick',
    350: 'Yuumi',
    154: 'Zac',
    238: 'Zed',
    115: 'Ziggs',
    26: 'Zilean',
    142: 'Zoe',
    143: 'Zyra'
};
// TODO: z match detail vydolovat queueId a zobrazit typ hry
// static from https://developer.riotgames.com/docs/lol
export const queues = [
    [
        {
        queueId: 0,
        map: 'Custom games',
        description: null,
        notes: null
        },
        {
        queueId: 2,
        map: 'Summoner\'s Rift',
        description: '5v5 Blind Pick games',
        notes: 'Deprecated in patch 7.19 in favor of queueId 430'
        },
        {
        queueId: 4,
        map: 'Summoner\'s Rift',
        description: '5v5 Ranked Solo games',
        notes: 'Deprecated in favor of queueId 420'
        },
        {
        queueId: 6,
        map: 'Summoner\'s Rift',
        description: '5v5 Ranked Premade games',
        notes: 'Game mode deprecated'
        },
        {
        queueId: 7,
        map: 'Summoner\'s Rift',
        description: 'Co-op vs AI games',
        notes: 'Deprecated in favor of queueId 32 and 33'
        },
        {
        queueId: 8,
        map: 'Twisted Treeline',
        description: '3v3 Normal games',
        notes: 'Deprecated in patch 7.19 in favor of queueId 460'
        },
        {
        queueId: 9,
        map: 'Twisted Treeline',
        description: '3v3 Ranked Flex games',
        notes: 'Deprecated in patch 7.19 in favor of queueId 470'
        },
        {
        queueId: 14,
        map: 'Summoner\'s Rift',
        description: '5v5 Draft Pick games',
        notes: 'Deprecated in favor of queueId 400'
        },
        {
        queueId: 16,
        map: 'Crystal Scar',
        description: '5v5 Dominion Blind Pick games',
        notes: 'Game mode deprecated'
        },
        {
        queueId: 17,
        map: 'Crystal Scar',
        description: '5v5 Dominion Draft Pick games',
        notes: 'Game mode deprecated'
        },
        {
        queueId: 25,
        map: 'Crystal Scar',
        description: 'Dominion Co-op vs AI games',
        notes: 'Game mode deprecated'
        },
        {
        queueId: 31,
        map: 'Summoner\'s Rift',
        description: 'Co-op vs AI Intro Bot games',
        notes: 'Deprecated in patch 7.19 in favor of queueId 830'
        },
        {
        queueId: 32,
        map: 'Summoner\'s Rift',
        description: 'Co-op vs AI Beginner Bot games',
        notes: 'Deprecated in patch 7.19 in favor of queueId 840'
        },
        {
        queueId: 33,
        map: 'Summoner\'s Rift',
        description: 'Co-op vs AI Intermediate Bot games',
        notes: 'Deprecated in patch 7.19 in favor of queueId 850'
        },
        {
        queueId: 41,
        map: 'Twisted Treeline',
        description: '3v3 Ranked Team games',
        notes: 'Game mode deprecated'
        },
        {
        queueId: 42,
        map: 'Summoner\'s Rift',
        description: '5v5 Ranked Team games',
        notes: 'Game mode deprecated'
        },
        {
        queueId: 52,
        map: 'Twisted Treeline',
        description: 'Co-op vs AI games',
        notes: 'Deprecated in patch 7.19 in favor of queueId 800'
        },
        {
        queueId: 61,
        map: 'Summoner\'s Rift',
        description: '5v5 Team Builder games',
        notes: 'Game mode deprecated'
        },
        {
        queueId: 65,
        map: 'Howling Abyss',
        description: '5v5 ARAM games',
        notes: 'Deprecated in patch 7.19 in favor of queueId 450'
        },
        {
        queueId: 67,
        map: 'Howling Abyss',
        description: 'ARAM Co-op vs AI games',
        notes: 'Game mode deprecated'
        },
        {
        queueId: 70,
        map: 'Summoner\'s Rift',
        description: 'One for All games',
        notes: 'Deprecated in patch 8.6 in favor of queueId 1020'
        },
        {
        queueId: 72,
        map: 'Howling Abyss',
        description: '1v1 Snowdown Showdown games',
        notes: null
        },
        {
        queueId: 73,
        map: 'Howling Abyss',
        description: '2v2 Snowdown Showdown games',
        notes: null
        },
        {
        queueId: 75,
        map: 'Summoner\'s Rift',
        description: '6v6 Hexakill games',
        notes: null
        },
        {
        queueId: 76,
        map: 'Summoner\'s Rift',
        description: 'Ultra Rapid Fire games',
        notes: null
        },
        {
        queueId: 78,
        map: 'Howling Abyss',
        description: 'One For All: Mirror Mode games',
        notes: null
        },
        {
        queueId: 83,
        map: 'Summoner\'s Rift',
        description: 'Co-op vs AI Ultra Rapid Fire games',
        notes: null
        },
        {
        queueId: 91,
        map: 'Summoner\'s Rift',
        description: 'Doom Bots Rank 1 games',
        notes: 'Deprecated in patch 7.19 in favor of queueId 950'
        },
        {
        queueId: 92,
        map: 'Summoner\'s Rift',
        description: 'Doom Bots Rank 2 games',
        notes: 'Deprecated in patch 7.19 in favor of queueId 950'
        },
        {
        queueId: 93,
        map: 'Summoner\'s Rift',
        description: 'Doom Bots Rank 5 games',
        notes: 'Deprecated in patch 7.19 in favor of queueId 950'
        },
        {
        queueId: 96,
        map: 'Crystal Scar',
        description: 'Ascension games',
        notes: 'Deprecated in patch 7.19 in favor of queueId 910'
        },
        {
        queueId: 98,
        map: 'Twisted Treeline',
        description: '6v6 Hexakill games',
        notes: null
        },
        {
        queueId: 100,
        map: 'Butcher\'s Bridge',
        description: '5v5 ARAM games',
        notes: null
        },
        {
        queueId: 300,
        map: 'Howling Abyss',
        description: 'Legend of the Poro King games',
        notes: 'Deprecated in patch 7.19 in favor of queueId 920'
        },
        {
        queueId: 310,
        map: 'Summoner\'s Rift',
        description: 'Nemesis games',
        notes: null
        },
        {
        queueId: 313,
        map: 'Summoner\'s Rift',
        description: 'Black Market Brawlers games',
        notes: null
        },
        {
        queueId: 315,
        map: 'Summoner\'s Rift',
        description: 'Nexus Siege games',
        notes: 'Deprecated in patch 7.19 in favor of queueId 940'
        },
        {
        queueId: 317,
        map: 'Crystal Scar',
        description: 'Definitely Not Dominion games',
        notes: null
        },
        {
        queueId: 318,
        map: 'Summoner\'s Rift',
        description: 'ARURF games',
        notes: 'Deprecated in patch 7.19 in favor of queueId 900'
        },
        {
        queueId: 325,
        map: 'Summoner\'s Rift',
        description: 'All Random games',
        notes: null
        },
        {
        queueId: 400,
        map: 'Summoner\'s Rift',
        description: '5v5 Draft Pick games',
        notes: null
        },
        {
        queueId: 410,
        map: 'Summoner\'s Rift',
        description: '5v5 Ranked Dynamic games',
        notes: 'Game mode deprecated in patch 6.22'
        },
        {
        queueId: 420,
        map: 'Summoner\'s Rift',
        description: '5v5 Ranked Solo games',
        notes: null
        },
        {
        queueId: 430,
        map: 'Summoner\'s Rift',
        description: '5v5 Blind Pick games',
        notes: null
        },
        {
        queueId: 440,
        map: 'Summoner\'s Rift',
        description: '5v5 Ranked Flex games',
        notes: null
        },
        {
        queueId: 450,
        map: 'Howling Abyss',
        description: '5v5 ARAM games',
        notes: null
        },
        {
        queueId: 460,
        map: 'Twisted Treeline',
        description: '3v3 Blind Pick games',
        notes: 'Deprecated in patch 9.23'
        },
        {
        queueId: 470,
        map: 'Twisted Treeline',
        description: '3v3 Ranked Flex games',
        notes: 'Deprecated in patch 9.23'
        },
        {
        queueId: 600,
        map: 'Summoner\'s Rift',
        description: 'Blood Hunt Assassin games',
        notes: null
        },
        {
        queueId: 610,
        map: 'Cosmic Ruins',
        description: 'Dark Star: Singularity games',
        notes: null
        },
        {
        queueId: 700,
        map: 'Summoner\'s Rift',
        description: 'Clash games',
        notes: null
        },
        {
        queueId: 800,
        map: 'Twisted Treeline',
        description: 'Co-op vs. AI Intermediate Bot games',
        notes: 'Deprecated in patch 9.23'
        },
        {
        queueId: 810,
        map: 'Twisted Treeline',
        description: 'Co-op vs. AI Intro Bot games',
        notes: 'Deprecated in patch 9.23'
        },
        {
        queueId: 820,
        map: 'Twisted Treeline',
        description: 'Co-op vs. AI Beginner Bot games',
        notes: null
        },
        {
        queueId: 830,
        map: 'Summoner\'s Rift',
        description: 'Co-op vs. AI Intro Bot games',
        notes: null
        },
        {
        queueId: 840,
        map: 'Summoner\'s Rift',
        description: 'Co-op vs. AI Beginner Bot games',
        notes: null
        },
        {
        queueId: 850,
        map: 'Summoner\'s Rift',
        description: 'Co-op vs. AI Intermediate Bot games',
        notes: null
        },
        {
        queueId: 900,
        map: 'Summoner\'s Rift',
        description: 'URF games',
        notes: null
        },
        {
        queueId: 910,
        map: 'Crystal Scar',
        description: 'Ascension games',
        notes: null
        },
        {
        queueId: 920,
        map: 'Howling Abyss',
        description: 'Legend of the Poro King games',
        notes: null
        },
        {
        queueId: 940,
        map: 'Summoner\'s Rift',
        description: 'Nexus Siege games',
        notes: null
        },
        {
        queueId: 950,
        map: 'Summoner\'s Rift',
        description: 'Doom Bots Voting games',
        notes: null
        },
        {
        queueId: 960,
        map: 'Summoner\'s Rift',
        description: 'Doom Bots Standard games',
        notes: null
        },
        {
        queueId: 980,
        map: 'Valoran City Park',
        description: 'Star Guardian Invasion: Normal games',
        notes: null
        },
        {
        queueId: 990,
        map: 'Valoran City Park',
        description: 'Star Guardian Invasion: Onslaught games',
        notes: null
        },
        {
        queueId: 1000,
        map: 'Overcharge',
        description: 'PROJECT: Hunters games',
        notes: null
        },
        {
        queueId: 1010,
        map: 'Summoner\'s Rift',
        description: 'Snow ARURF games',
        notes: null
        },
        {
        queueId: 1020,
        map: 'Summoner\'s Rift',
        description: 'One for All games',
        notes: null
        },
        {
        queueId: 1030,
        map: 'Crash Site',
        description: 'Odyssey Extraction: Intro games',
        notes: null
        },
        {
        queueId: 1040,
        map: 'Crash Site',
        description: 'Odyssey Extraction: Cadet games',
        notes: null
        },
        {
        queueId: 1050,
        map: 'Crash Site',
        description: 'Odyssey Extraction: Crewmember games',
        notes: null
        },
        {
        queueId: 1060,
        map: 'Crash Site',
        description: 'Odyssey Extraction: Captain games',
        notes: null
        },
        {
        queueId: 1070,
        map: 'Crash Site',
        description: 'Odyssey Extraction: Onslaught games',
        notes: null
        },
        {
        queueId: 1090,
        map: 'Convergence',
        description: 'Teamfight Tactics games',
        notes: null
        },
        {
        queueId: 1100,
        map: 'Convergence',
        description: 'Ranked Teamfight Tactics games',
        notes: null
        },
        {
        queueId: 1110,
        map: 'Convergence',
        description: 'Teamfight Tactics Tutorial games',
        notes: null
        },
        {
        queueId: 1200,
        map: 'Nexus Blitz',
        description: 'Nexus Blitz games',
        notes: 'Deprecated in patch 9.2'
        },
        {
        queueId: 2000,
        map: 'Summoner\'s Rift',
        description: 'Tutorial 1',
        notes: null
        },
        {
        queueId: 2010,
        map: 'Summoner\'s Rift',
        description: 'Tutorial 2',
        notes: null
        },
        {
        queueId: 2020,
        map: 'Summoner\'s Rift',
        description: 'Tutorial 3',
        notes: null
        }
        ]
];
