import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'matchResult' })
export class MatchResult implements PipeTransform {

  // <b>{{ match.summGameData.stats.win | matchResult }}</b></span
  
  transform(result: boolean): string {
    return result === true ? 'Win' : 'Defeat';
  }
}
