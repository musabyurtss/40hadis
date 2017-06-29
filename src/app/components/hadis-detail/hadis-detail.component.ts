import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kh-hadis-detail',
  templateUrl: './hadis-detail.component.html',
  styleUrls: ['./hadis-detail.component.css']
})
export class HadisDetailComponent implements OnInit {
  @Input() hadis;

  constructor() { }

  ngOnInit() {
  }

}
