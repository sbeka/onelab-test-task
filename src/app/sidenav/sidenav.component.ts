import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ModalWindowService} from '../../core/services/helpers/modal.window';
import {CategoryModel} from '../../core/interfaces/category.model';
import {CategoryService} from '../../core/services/api/category-service';

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
        private categoryService: CategoryService
    ) {}

    ngOnInit() {}

    deleteCategory(id: string) {
        this.modalService
            .modalWindow('Хотите удалить категорию?', 'Все товары в этой категории будут помечены "Без категории"')
            .subscribe(result => {
                if (result) {
                    this.categoryService
                        .del(id)
                        .subscribe(res => this.deleted.emit(true));
                }
            });
    }

    changeCategory(id: string) {
        this.changedCategory.emit(id);
    }

}
