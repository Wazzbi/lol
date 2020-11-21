import { Observable } from 'rxjs';
import { UtilsService } from './services/utils.service';
import { SpectatorService } from './services/spectator.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private riotApi: SpectatorService, private utilsService: UtilsService) {}
  title = 'Legendary';
  image: Observable<any>;

  ngOnInit(): void {
    // ! ONLY TEST
    this.riotApi.getSummonerData('herdyn', 'EUN1').subscribe(d => console.log(d));
    this.image = this.utilsService.getAssetsImage('Emblem_BRONZE');
  }

  // blobToImage = (blob) => {
  //   return new Promise(resolve => {
  //     const url = URL.createObjectURL(blob)
  //     let img = new Image()
  //     img.onload = () => {
  //       URL.revokeObjectURL(url)
  //       resolve(img)
  //     }
  //     img.src = url
  //   })
  // }
}
