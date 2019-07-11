import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ApiService} from './api-service';
import {Observable} from 'rxjs';
import {CategoryModel} from '../../interfaces/category.model';


@Injectable()
export class CategoryService extends ApiService {

    model = 'category';

    constructor(public http: HttpClient) {
        super(http);
    }

    list(): Observable<CategoryModel> {
        return this.get(this.model);
    }

    add(data: CategoryModel): Observable<CategoryModel> {
        return this.post(this.model, data);
    }

    del(id: number): Observable<CategoryModel> {
        return this.remove(this.model, id);
    }
}
