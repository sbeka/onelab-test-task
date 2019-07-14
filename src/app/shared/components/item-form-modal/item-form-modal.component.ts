import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ItemModel} from '../../../core/interfaces';
import {ItemService} from '../../../core/services/api/item-service';
import {CategoryService} from '../../../core/services/api/category-service';
import {CategoryModel} from '../../../core/interfaces/category.model';

@Component({
  selector: 'app-item-form-modal',
  templateUrl: './item-form-modal.component.html',
  styleUrls: ['./item-form-modal.component.scss']
})
export class ItemFormModalComponent implements OnInit {

    idItem = '';
    modalTitle: string;
    categories = [];

    itemForm = new FormGroup({
        category: new FormControl('', [ Validators.required ]),
        name: new FormControl('', [ Validators.required, Validators.minLength(5) ]),
        price_purchase: new FormControl('', [ Validators.required ]),
        price_sale: new FormControl('', [ Validators.required ])
    });

    get category() { return this.itemForm.get('category'); }
    get name() { return this.itemForm.get('name'); }
    get price_purchase() { return this.itemForm.get('price_purchase'); }
    get price_sale() { return this.itemForm.get('price_sale'); }


    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<any>,
        private itemService: ItemService,
        private categoryService: CategoryService
    ) {
        this.modalTitle = data.title;
        this.idItem = data.id;
    }

    ngOnInit() {
        if (this.idItem !== null) {
            this.getItemById(this.idItem);
        }
        this.categoryService
            .list()
            .subscribe((categories: CategoryModel[]) => this.categories = categories);
    }

    getItemById(id: string) {
        this.itemService.getById(id).subscribe((item: ItemModel) => {
            this.category.setValue(item.category);
            this.name.setValue(item.name);
            this.price_purchase.setValue(item.price_purchase);
            this.price_sale.setValue(item.price_sale);
        });
    }

    add() {
        this.itemService
            .add(this.itemForm.value)
            .subscribe(
                () => this.dialogRef.close(true),
                () => this.dialogRef.close(false)
            );
    }

    edit() {
        this.itemService
            .set(this.idItem, this.itemForm.value)
            .subscribe(
                () => this.dialogRef.close(true),
                () => this.dialogRef.close(false)
            );
    }

}
