import { Hadis } from './../models/hadis';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HadisDataService {
    private API_ROOT: String = 'http://localhost:3000';

    constructor(private http: Http) { }

    getHadiss(skip = '0', limit = '7'): Observable<Hadis[]> {

        const headerJson = new Headers({ 'Content-Type': 'application/json' });

        const params = new URLSearchParams();
        params.append('_page', skip);
        params.append('_limit', limit);

        const options = new RequestOptions({ headers: headerJson, params: params });

        return this.http.get(`${this.API_ROOT}/hadis`, options)
            .map((response: Response) => response.json())
    }

    getHadisById(id) {

        const headerJson = new Headers({ 'Content-Type': 'application/json' });

        return this.http.get(`${this.API_ROOT}/hadis/${id}`, { headers: headerJson })
            .map((response: Response) => response.json())
    }

}
