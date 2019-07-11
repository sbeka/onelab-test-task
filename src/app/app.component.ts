import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {MyDialogComponent} from '../shared/components/my-dialog/my-dialog.component';
import {Observable} from 'rxjs';
import {ItemFormModalComponent} from '../shared/components/item-form-modal/item-form-modal.component';
import {CategoryFormModalComponent} from '../shared/components/category-form-modal/category-form-modal.component';
import {CategoryModel} from '../core/interfaces/category.model';
import {CategoryService} from '../core/services/api/category-service';

export interface PeriodicElement {
    id?: number;
    name: string;
    price_purchase: number;
    price_sale: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
    {id: 1, name: 'Hydrogen', price_purchase: 2000, price_sale: 2500},
    {id: 2, name: 'Hydrogen', price_purchase: 2000, price_sale: 2500},
    {id: 3, name: 'Hydrogen', price_purchase: 2000, price_sale: 2500},
    {id: 4, name: 'Hydrogen', price_purchase: 2000, price_sale: 2500},
    {id: 5, name: 'Hydrogen', price_purchase: 2000, price_sale: 2500},
    {id: 6, name: 'Hydrogen', price_purchase: 2000, price_sale: 2500},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    displayedColumns: string[] = ['id', 'name', 'price_purchase', 'price_sale', 'action'];
    dataSource = ELEMENT_DATA;
    categories: CategoryModel;

    constructor(public dialog: MatDialog, private categoryService: CategoryService) {
        this.categoryService.list().subscribe(res => console.log(res));
    }

    deleteCategory() {
        this.modalWindow('Хотите удалить категорию?', 'Все товары в этой категории будут помечены "Без категории"')
            .subscribe(result => console.log(result));
    }

    deleteItem() {
        this.modalWindow('Точно удалить товар?', '')
            .subscribe(result => console.log(result));
    }

    editItem(idItem: string) {
        this.modalWindowFormItem('Изменить товар', idItem).subscribe(result => console.log(result));
    }

    private modalWindow(title: string, subtitle: string): Observable<any> {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            id: 1,
            title,
            subtitle
        };
        const dialogRef = this.dialog.open(MyDialogComponent, dialogConfig);
        return dialogRef.afterClosed();
    }

    private modalWindowFormItem(title: string, idItem: string = null): Observable<any> {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            id: 1,
            title,
            idItem
        };
        const dialogRef = this.dialog.open(ItemFormModalComponent, dialogConfig);
        return dialogRef.afterClosed();
    }

    private modalWindowFormCategory(): Observable<any> {
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        const dialogRef = this.dialog.open(CategoryFormModalComponent, dialogConfig);
        return dialogRef.afterClosed();
    }

}
