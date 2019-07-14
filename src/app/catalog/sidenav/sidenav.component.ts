import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ModalWindowService} from '../../core/services/helpers/modal.window';
import {CategoryModel} from '../../core/interfaces/category.model';
import {CategoryService} from '../../core/services/api/category-service';
import {ItemService} from '../../core/services/api/item-service';
import {ItemModel} from '../../core/interfaces';
import {forkJoin} from 'rxjs';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

    @Input() categories: CategoryModel[];
    @Output() deleted = new EventEmitter();
    @Output() changedCategory = new EventEmitter();

    constructor(
        public modalService: ModalWindowService,
        private categoryService: CategoryService,
        private itemService: ItemService
    ) {}

    ngOnInit() {}

    deleteCategory(id: string) {
        this.modalService
            .modalWindow('Хотите удалить категорию?', 'Все товары в этой категории будут помечены "Без категории"')
            .subscribe(result => {
                if (result) {
                    this.modalService.presentLoader();
                    this.categoryService
                        .del(id)
                        .toPromise()
                        .then(() => this.itemService.getByCategory(id).toPromise())
                        .then((items: ItemModel[]) => {
                            if (items.length) {
                                const requestArray = [];
                                for (const item of items) {
                                    requestArray.push(this.itemService.set(item.id, {category: '0'}));
                                }
                                return forkJoin(requestArray).toPromise();
                            }
                        })
                        .then(() => {
                            this.deleted.emit(true);
                            this.modalService.dismissLoader();
                        })
                        .catch(() => this.modalService.dismissLoader());
                }
            });
    }

    changeCategory(id: string) {
        this.changedCategory.emit(id);
    }

}
