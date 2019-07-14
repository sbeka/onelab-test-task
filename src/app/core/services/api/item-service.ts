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

    getById(id: string) {
        return this.get(this.model + '/' + id);
    }

    getByCategory(categoryId: string) {
        const filter = {
            where: {
                category: categoryId
            }
        };
        return this.get(this.model + '/?filter=' + JSON.stringify(filter));
    }

    list(): Observable<ItemModel[]> {
        return this.get(this.model);
    }

    set(id, data: any): Observable<ItemModel> {
        return this.patch(this.model, id, data);
    }

    add(data: ItemModel): Observable<ItemModel> {
        return this.post(this.model, data);
    }

    del(id: string): Observable<ItemModel> {
        return this.remove(this.model, id);
    }
}
