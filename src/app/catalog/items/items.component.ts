import {Component, Input, OnInit} from '@angular/core';
import {ModalWindowService} from '../../core/services/helpers/modal.window';
import {ItemService} from '../../core/services/api/item-service';
import {ItemModel} from '../../core/interfaces';
import {MatDialog, MatDialogRef} from '@angular/material';
import {reject} from 'q';
import {CategoryService} from '../../core/services/api/category-service';


@Component({
    selector: 'app-items',
    templateUrl: './items.component.html',
    styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

    displayedColumns: string[] = ['name', 'price_purchase', 'price_sale', 'action'];
    @Input() items: ItemModel[] = [];

    constructor(
        private modalService: ModalWindowService,
        private itemService: ItemService,
        private categoryService: CategoryService
    ) {}

    ngOnInit() {}

    deleteItem(id: string, name: string) {
        this.modalService
            .modalWindow(`Точно удалить товар "${name}" ?`, '')
            .toPromise()
            .then(result => {
                if (result) {
                    this.modalService.presentLoader();
                    return this.itemService.del(id).toPromise();
                }
            })
            .then(() => this.itemService.getByCategory(this.categoryService.selected).toPromise())
            .then((items: ItemModel[]) => {
                this.items = items;
                this.modalService.dismissLoader();
            })
            .catch(() => this.modalService.dismissLoader());
    }

    editItem(idItem: string) {
        this.modalService
            .modalWindowFormItem('Изменить товар', idItem)
            .toPromise()
            .then(() => {
                this.modalService.presentLoader();
                return this.itemService.getByCategory(this.categoryService.selected).toPromise();
            })
            .then((items: ItemModel[]) => {
                this.items = items;
                this.modalService.dismissLoader();
            })
            .then(() => this.modalService.dismissLoader())
            .catch(() => this.modalService.dismissLoader());
    }

}
