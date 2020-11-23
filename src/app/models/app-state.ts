import { Match } from './match';
import { Status } from './status';
import { SummonerLeague } from './summoner-league';

export class AppState {
    loadingSummoner: boolean;
    loadingLeagues: boolean;
    loadingMatches: boolean;
    summoner: {
        accountId: string,
        id: string,
        name: string,
        profileIconId: number,
        puuid: string,
        revisionDate: number,
        summonerLevel: number,
        region: string,
        status: Status
    };
    summonerLeagues: SummonerLeague[];
    matches: Match[];
}

