import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kh-hadis-list-item',
  templateUrl: './hadis-list-item.component.html',
  styleUrls: ['./hadis-list-item.component.css']
})
export class HadisListItemComponent implements OnInit {
  @Input() hadis;

  constructor() { }

  ngOnInit() {
  }

}