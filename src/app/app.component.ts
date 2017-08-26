import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Hadis, HadisState, State, getHadisItem, getPrev, getNext, getPending } from './modules/ngrx';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  pending;

  constructor(
    private route: ActivatedRoute,
    private store: Store<State>
  ) {

    this.pending = this.store.select(getPending);


  }
 }
