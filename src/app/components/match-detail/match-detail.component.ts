import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.scss']
})
export class MatchDetailComponent implements OnInit {
  @Input() champImgUrl: string;
  @Input() champName: string;

  constructor() { }

  ngOnInit() {
  }

  tooltipName(name: string): string {
    return `title: ${name}; pos: left`;
  }

}
