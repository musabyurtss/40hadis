import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Hadis } from '../../models/hadis';

@Component({
  selector: 'kh-hadis-list',
  templateUrl: './hadis-list.component.html',
  styleUrls: ['./hadis-list.component.css']
})
export class HadisListComponent implements OnInit {
  @Input() hadisler: Observable<Hadis[]>;

  constructor() {
  }
  ngOnInit() {
  }

}
