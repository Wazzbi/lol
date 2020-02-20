import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'matchResult' })
export class MatchResult implements PipeTransform {
  transform(result: boolean): string {
    return result === true ? 'Win' : 'Defeat';
  }
}
