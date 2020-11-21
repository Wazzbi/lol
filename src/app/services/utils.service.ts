import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private httpClient: HttpClient) {}

  private RIOT_URL = 'http://localhost/riotApi/lol/api/riotApi.php';

  headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

  getAssetsImage(name: string): Observable<any> {
    return this.httpClient.post<any>(
      this.RIOT_URL, `image=${name}`, {headers: this.headers, responseType: 'blob' as 'json'});
  }

}
