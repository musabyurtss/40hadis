import { Hadis } from './../models/hadis';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HadisDataService {

    // private API_ROOT: String = 'http://localhost:3007';
    private API_ROOT: String = 'https://safe-scrubland-70496.herokuapp.com';

    constructor(private http: Http) { }

    getHadiss(skip = '0', limit = '5'): Observable<any> {

        const headerJson = new Headers({ 'Content-Type': 'application/json' });

        const params = new URLSearchParams();
        params.append('skip', skip);
        params.append('limit', limit);

        const options = new RequestOptions({ headers: headerJson, params: params });

        return this.http.get(`${this.API_ROOT}/hadis`, options)
            .map((response: Response) => response.json())
    }

    getHadisByFilters(filters) {
        const params = new URLSearchParams();
        params.set("skip", (filters.pagination.pageSize * filters.pagination.currentPage - filters.pagination.pageSize).toString());
        params.set("limit", (filters.pagination.pageSize));
        
        return this.http.get(`${this.API_ROOT}/hadis`, { search: params }).map(r => r.json());

    }

    getHadisById(id) {

        const headerJson = new Headers({ 'Content-Type': 'application/json' });

        return this.http.get(`${this.API_ROOT}/hadis/${id}`, { headers: headerJson })
            .map((response: Response) => response.json())
    }

}
