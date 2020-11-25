import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackService {

  constructor(private httpClient: HttpClient, private sanitizer: DomSanitizer) { }

  getChampionIcon(name: string): string {
    return `http://localhost/lol/api/dragontail-10.10.5/10.10.3224670/img/champion/${name}.png`;
  }

}
