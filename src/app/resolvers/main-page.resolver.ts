import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Hadis } from '../models/hadis';
import { HadisDataService } from '../services/hadis.data.service';

@Injectable()
export class MainPageResolver implements Resolve<Hadis> {
  constructor(private _hadisDataService: HadisDataService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {    
    return this._hadisDataService.getHadiss();
  }
}