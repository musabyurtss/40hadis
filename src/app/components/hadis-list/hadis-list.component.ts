import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Hadis } from "../../_model/hadis";

@Component({
  selector: 'kh-hadis-list',
  templateUrl: './hadis-list.component.html',
  styleUrls: ['./hadis-list.component.css']
})
export class HadisListComponent implements OnInit {
  @Input() hadisler: Hadis[];

  constructor() {
  }
  ngOnInit() {
  }

}
