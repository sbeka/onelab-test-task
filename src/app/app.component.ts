import {Component, OnInit} from '@angular/core';
import {CategoryModel} from './core/interfaces/category.model';
import {ItemModel} from './core/interfaces';
import {CategoryService} from './core/services/api/category-service';
import {ItemService} from './core/services/api/item-service';
import {ModalWindowService} from './core/services/helpers/modal.window';
import {forkJoin} from 'rxjs';


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
        private itemService: ItemService,
        private modalService: ModalWindowService
    ) {
        this.categories = [];
        this.items = [];
    }

    ngOnInit() {
        this.modalService.presentLoader();
        forkJoin(
            this.categoryService.list(),
            this.itemService.getByCategory(this.categoryService.selected)
        ).subscribe((results) => {
            this.categories = results[0];
            this.items = results[1];
            this.modalService.dismissLoader();
        });
    }

    refreshCategories(result) {
        if (result) {
            this.categoryService
                .list()
                .subscribe(
                    (res: any) => {
                        this.categories = res;
                    }
                );
        }
    }

    refreshItems(result) {
        if (result) {
            this.modalService.presentLoader();
            this.itemService
                .getByCategory(this.categoryService.selected)
                .subscribe(
                    (res: any) => {
                        this.items = res;
                        this.modalService.dismissLoader();
                    },
                    () => this.modalService.dismissLoader()
                );
        }
    }

    getItemsByCategory(event) {
        this.modalService.presentLoader();
        this.categoryService.selected = event;
        this.itemService
            .getByCategory(event)
            .subscribe(
                (res: any) => {
                    this.items = res;
                    this.modalService.dismissLoader();
                },
                () => this.modalService.dismissLoader()
            );
    }

}
