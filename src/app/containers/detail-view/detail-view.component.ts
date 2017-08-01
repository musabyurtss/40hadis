import { Component, OnInit, ChangeDetectionStrategy, Injectable, ViewChild, ElementRef } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot, ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import 'rxjs/add/observable/merge';

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
