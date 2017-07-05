import { Component, OnInit, ChangeDetectionStrategy, Injectable, ViewChild, ElementRef } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { HadisDataService } from './../../services/hadis.data.service';
import 'rxjs/add/observable/merge';

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

  hadis;

  @ViewChild('contenthtml')
  contenthtml: ElementRef;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.hadis = this.route.snapshot.data['hadis'];
    this.loadData(this.hadis.hadisInfo.text);
  }

  loadData(data) {
    this.contenthtml.nativeElement.innerHTML = data;
  }

}

@Injectable()
export class DetailViewResolver implements Resolve<Hadis> {
  constructor(private _hadisDataService: HadisDataService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this._hadisDataService.getHadisById(+route.params['id']);
  }
}
