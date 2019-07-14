import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable()
export class ApiService {

    apiUrl = 'http://176.53.162.11:3000/api';

    constructor(public http: HttpClient) {}

    get(model: string): Observable<any> {
        return this.http.get(`${this.apiUrl}/${model}`);
    }

    post(model: string, data: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/${model}`, data);
    }

    patch(model: string, id: string, data: any): Observable<any> {
        return this.http.patch(`${this.apiUrl}/${model}/${id}`, data);
    }

    remove(model: string, id: string): Observable<any> {
        return this.http.delete(`${this.apiUrl}/${model}/${id}`);
    }
}
