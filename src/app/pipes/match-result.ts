import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'matchResult' })
export class MatchResult implements PipeTransform {
  
  transform(result: string): string {
    return result ===  'Win' ? 'Win' : 'Defeat';
  }
}
