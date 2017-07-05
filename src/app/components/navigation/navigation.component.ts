import { Component, OnInit, Input } from '@angular/core';

import { Hadis } from '../../models/hadis';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input()
  prevHadis: Hadis;

  @Input()
  nextHadis: Hadis;

  constructor() { }

  ngOnInit() {

  }

}