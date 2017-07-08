import { ActivatedRoute } from '@angular/router';
import { Hadis } from './../../models/hadis';

import { Component, OnInit, ChangeDetectionStrategy, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as reducer from '../../reducers';
import * as hadis from '../../actions/hadis';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent implements OnInit {

  hadisler$: Observable<Hadis[]>;
  loading$: Observable<boolean>

  hadisArray = [];

  constructor(private route: ActivatedRoute) { }


  ngOnInit() {
    this.hadisArray = this.route.snapshot.data['hadiss'];
  }

}

