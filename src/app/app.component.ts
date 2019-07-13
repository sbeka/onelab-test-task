import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../core/services/api/category-service';
import {CategoryModel} from '../core/interfaces/category.model';
import {ItemService} from '../core/services/api/item-service';
import {ItemModel} from '../core/interfaces';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    categories: CategoryModel[];
    items: ItemModel[];

    constructor(
        private categoryService: CategoryService,
        private itemService: ItemService
    ) {}

    ngOnInit(): void {
        this.categoryService
            .list()
            .subscribe((res: any) => this.categories = res);
        this.itemService
            .list()
            .subscribe((res: any) => this.items = res);
    }

    refreshCategories(result) {
        if (result) {
            this.categoryService
                .list()
                .subscribe((res: any) => this.categories = res);
        }
    }

    refreshItems(result) {
        if (result) {
            this.itemService
                .list()
                .subscribe((res: any) => this.items = res);
        }
    }

    getItemsByCategory(event) {
        console.log(event);
        this.itemService
            .getByCategory(event)
            .subscribe((res: any) => this.items = res);
    }

}
