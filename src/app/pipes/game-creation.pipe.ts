import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gameCreation'
})
export class GameCreation implements PipeTransform {

  transform(value: number): string {
    return new Date(value).toLocaleDateString();
  }

}
