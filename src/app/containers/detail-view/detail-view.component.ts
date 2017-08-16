import { Component, OnInit, OnChanges, ChangeDetectionStrategy, Injectable, ViewChild, ElementRef } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot, ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import 'rxjs/add/observable/merge';

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

  @ViewChild('contenthtml')
  contenthtml: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private store: Store<any>,
    private action$: Actions
  ) { }

  ngOnInit() {
    // this.hadis = Observable.of(this.route.snapshot.data['hadis']);

    this.hadis = this.store.select('hadisItem').map(state => state['selectedHadisItem']);


    this.hadis.subscribe((h) => {
      this.loadData(h.hadisInfo.text);
    })


    this.prev = this.store.select('hadisItem').map(state => state['navItems']['prev']);
    this.next = this.store.select('hadisItem').map(state => state['navItems']['next']);

  }

  loadData(data) {
    this.contenthtml.nativeElement.innerHTML = data;
  }


  // NAVIGATION


}
