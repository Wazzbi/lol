import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackService {
  private BE_URL = 'http://localhost/riotApi/lol/api/riotApi.php';
  private headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

  constructor(private httpClient: HttpClient, private sanitizer: DomSanitizer) { }

  getChampionIcon(name: string): any {
    return this.httpClient.post<any>(
      this.BE_URL, `champIconName=${name}`, {headers: this.headers, responseType: 'blob' as 'json'}
      ).pipe(
        map(d => URL.createObjectURL(d)),
        map(t => this.sanitizer.bypassSecurityTrustUrl(t))
      );
  }

}
