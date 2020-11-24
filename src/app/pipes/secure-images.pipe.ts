import { BackService } from './../services/back.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'secure'
})
export class SecureImages implements PipeTransform {

  constructor(private backService: BackService) { }

  transform(id: number): any {
    return this.backService.getChampionIcon(id);
  }

}
