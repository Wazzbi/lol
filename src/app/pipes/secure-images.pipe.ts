import { BackService } from './../services/back.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'getImage'
})
export class SecureImages implements PipeTransform {

  constructor(private backService: BackService) { }

  transform(name: string): any {
    return this.backService.getChampionIcon(name);
  }

}
