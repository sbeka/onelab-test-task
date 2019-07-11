import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ApiService} from './api-service';
import {Observable} from 'rxjs';
import {ItemModel} from '../../interfaces';


@Injectable()
export class ItemService extends ApiService {

    model = 'item';

    constructor(public http: HttpClient) {
        super(http);
    }

    list(): Observable<ItemModel> {
        return this.get(this.model);
    }

    add(data: ItemModel): Observable<ItemModel> {
        return this.post(this.model, data);
    }

    del(id: number): Observable<ItemModel> {
        return this.remove(this.model, id);
    }
}
