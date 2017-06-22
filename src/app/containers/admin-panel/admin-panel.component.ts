import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Hadis } from '../../models/hadis';
import { CREATE_HADIS, REMOVE_HADIS } from '../../actions/hadis';

interface AppState {
  hadis: Hadis;
}

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush // daha tam anlayamadim bunu.
})
export class AdminPanelComponent implements OnInit {
  hadisler$: Observable<Hadis[]>;

  constructor(private _store: Store<AppState>) { }

  ngOnInit() {
    this.hadisler$ = this._store.select('HadisReducer');
  }

  id = 0;
  addHadis(hadis) {
    console.log(hadis);
    this._store.dispatch({ type: CREATE_HADIS, payload: { id: this.id++ , title: hadis.title, text: hadis.text }});
  }

  deleteHadis(hadisId) {
    console.log(hadisId);
    this._store.dispatch({ type: REMOVE_HADIS, payload: { id: hadisId } });
  }

}
