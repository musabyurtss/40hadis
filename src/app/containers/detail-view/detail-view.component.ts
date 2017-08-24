import { Component, OnInit, OnChanges, ChangeDetectionStrategy, Injectable, ViewChild, ElementRef } from '@angular/core';

import { Hadis, HadisState, State, getHadisItem } from './../../modules/ngrx';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/Last';



@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailViewComponent implements OnInit {

  hadis;
  prev;
  next;

  constructor(
    private route: ActivatedRoute,
    private store: Store<State>,
    private action$: Actions
  ) { }

  ngOnInit() {

    this.hadis = this.route.snapshot.data['hadis'];

    // this.prev = this.store.select('hadisItem').map(state => state['navItems']['prev']);
    // this.next = this.store.select('hadisItem').map(state => state['navItems']['next']);

  }

  // NAVIGATION


}
