import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Hadis } from '../../_model/hadis';
import { ADD_HADIS, REMOVE_HADIS } from '../../actions/hadis';

interface AppState {
  hadis: Hadis;
}

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminPanelComponent implements OnInit {
  hadisler$: Observable<Hadis[]>;

  constructor(private _store: Store<AppState>) {}

  ngOnInit() {
    this.hadisler$ = this._store.select('hadis');
    // console.log(this.hadisler$);
  }

  addHadis(hadisname) {
    console.log(hadisname);
    this._store.dispatch({ type: ADD_HADIS, payload: { id: Math.random() * 2, baslik: hadisname, metin: 'metiiin' } });
  }

}
