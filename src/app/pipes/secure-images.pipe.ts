import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'secure'
})
export class SecureImages implements PipeTransform {

  constructor(private httpClient: HttpClient, private sanitizer: DomSanitizer) { }

  private RIOT_URL = 'http://localhost/riotApi/lol/api/riotApi.php';
  private headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

  transform(name: any): any {
    return this.httpClient.post<any>(
      this.RIOT_URL, `image=${name}`, {headers: this.headers, responseType: 'blob' as 'json'}
      ).pipe(
        map(d => URL.createObjectURL(d)),
        map(t => this.sanitizer.bypassSecurityTrustUrl(t))
      );
  }

}
