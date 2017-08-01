import { ActivatedRoute } from '@angular/router';
import { Hadis } from './../../modules/ngrx';

import { Component, OnInit, ChangeDetectionStrategy, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent implements OnInit {

  hadisArray = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.hadisArray = this.route.snapshot.data['hadiss']
  }

}

