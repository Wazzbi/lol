import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'matchType' })
export class MatchType implements PipeTransform {
  transform(type: string): string {
    if (type === 'MATCHED_GAME') {
      return 'Ranked';
    }
    if (type === 'CUSTOM_GAME') {
      return 'Custom';
    }
    if (type === 'TUTORIAL_GAME') {
      return 'Tutorial';
    }
  }
}
