import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/models/item-list';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  @Input() itemData: Item;
  name: string;

  constructor() {}

  ngOnInit() {
    if (this.itemData) {
      this.name = this.itemData.name;
    }
  }
}
