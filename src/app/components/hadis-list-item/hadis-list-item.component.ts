import { Component, OnInit, Input } from '@angular/core';

import { Hadis } from './../../models/hadis';

@Component({
  selector: 'app-hadis-list-item',
  templateUrl: './hadis-list-item.component.html',
  styleUrls: ['./hadis-list-item.component.css']
})
export class HadisListItemComponent implements OnInit {

  @Input()
  layoutType: string; // ListItem | DetailItem

  @Input() hadis: Hadis;

  url: string = 'paylaşmak için sayfa urlsi';

  constructor() { }

  ngOnInit() { }

}
