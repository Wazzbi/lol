import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'gameDuration' })
export class GameDuration implements PipeTransform {
  
  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    const seconds: number = value - minutes * 60;

    // if (seconds < 10) {
    //   return minutes + ':0' + seconds;
    // } else {
    //   return minutes + ':' + seconds;
    // }
    return minutes + 'm ' + seconds + 's';
  }
}
