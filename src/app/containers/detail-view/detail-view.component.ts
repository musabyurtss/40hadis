import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as reducer from '../../reducers';
import * as hadisItem from '../../actions/hadisItem';
import { Hadis } from './../../models/hadis';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailViewComponent implements OnInit {
  hadisItem$: Observable<Hadis>;
  loading$: Observable<boolean>


  constructor(private route: ActivatedRoute, private _store: Store<any>) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      const id = +params['id'];

      this._store.dispatch(new hadisItem.HadisByIdAction(id));

      this.hadisItem$ = this._store.select(reducer.getSelectedHadisItem);
      this.loading$ = this._store.select(reducer.getSelectedHadisLoading);
    });

  }

}
