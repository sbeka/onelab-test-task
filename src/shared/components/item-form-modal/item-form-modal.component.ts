import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ItemModel} from '../../../core/interfaces';

@Component({
  selector: 'app-item-form-modal',
  templateUrl: './item-form-modal.component.html',
  styleUrls: ['./item-form-modal.component.scss']
})
export class ItemFormModalComponent {

    idItem: ItemModel = null;
    modalTitle: string;

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
        public dialogRef: MatDialogRef<any>
    ) {
        this.modalTitle = data.title;
        this.idItem = data.idItem;
        if (this.idItem !== null) {
            this.getItemById();
        }
    }

    getItemById() {
        this.category.setValue('2');
        this.name.setValue('name 1');
        this.price_purchase.setValue(500);
        this.price_sale.setValue(1000);
    }

    add() {
        console.log(this.itemForm.value);
        // this.dialogRef.close();
    }

    edit() {
        console.log('item saved');
    }

}
