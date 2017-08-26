import { Component, OnInit, Input, Output } from '@angular/core';



@Component({
  selector: 'app-hadis-list-item',
  templateUrl: './hadis-list-item.component.html',
  styleUrls: ['./hadis-list-item.component.css']
})
export class HadisListItemComponent implements OnInit {

  @Input()
  layoutType: string; // ListItem | DetailItem

  @Input() hadis;

  url: string = 'paylaşmak için sayfa urlsi';

  constructor() { }

  ngOnInit() { }

}
